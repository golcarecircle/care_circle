import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { getUserById } from '../controllers/user.controller';
import { IUser } from '../users';
import bcrypt from 'bcryptjs';
interface Credentials{
  email: string;
  password: string;
}
export default NextAuth({
    session:{
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            name: 'Credentials',
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
                    email: user.email, 
                    name: user.name,
                    id: user._id,
                    phone: user.phone,
                }
            },
        })
  ],
});

// const options = {
//     // adapter: MongoDBAdapter(clientPromise),
//     providers: [
//         CredentialsProvider({
//             async authorize(credentials: Data){
//                 const users = (await clientPromise).db().collection('users');
//                 const res = await users.findOne({email:credentials.email})
//                 if (!res) {
//                     (await clientPromise).close();
//                     throw new Error("No User Found");
//                 }
//                 if (credentials.password!==res.password) {
//                     (await clientPromise).close();
//                     throw new Error("Password doesnt Match");
                    
//                 }
//                 (await clientPromise).close();
//                 return {email: res.email}
//             }
//         }),
        
//     ],
//     callbacks: {
//         async jwt(token: string, user, account) {
//           if (user) {
//             token.user = user;
//           }
    
//           return token;
//         },
//       },
    
//       session: {
//         jwt: true,
//         maxAge: 30 * 24 * 60 * 60,
//         updateAge: 24 * 60 * 60,
//       },
// }
// export default NextAuth(options)