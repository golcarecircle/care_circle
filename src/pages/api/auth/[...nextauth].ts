import NextAuth, {NextAuthOptions, Session} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getUserById } from '../controllers/user.controller';
import { IUser } from '../users';
import bcrypt from 'bcryptjs';
import { NextApiHandler } from 'next';
import { JWT } from 'next-auth/jwt';
interface Credentials{
  email: string;
  password: string;
}
export const options: NextAuthOptions = {
    session:{
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({token, user}) {
            
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session,token }){
            if (token) {
                session.user = token.user
            }
            return Promise.resolve(session);
        },
    },
    providers: [
        GoogleProvider({
            id: 'google',
            clientId: '',
            clientSecret: ''
        }),
        Credentials({
            id: 'credentials',
            name: 'credentials',
            credentials:{
                email:{label:'email', type:'text',placeholder:''},
                password:{label:'password',type:'password'}
            },
            async authorize(credentials: Credentials,req){
                const { email, password } = credentials;
                const user: IUser| null = await getUserById(email);
                if (!user) {
                    throw new Error("No User Found");
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error("Password doesnt Match");
                }
                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    isAdmin: user.userType==='PATIENT'?true:false,
                };
            },
            
        })
    ],
}
const Handler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default Handler;