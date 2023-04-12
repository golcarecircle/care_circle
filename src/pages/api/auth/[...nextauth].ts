import NextAuth, { NextAuthOptions, Session, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getUserByEmail } from '../controllers/user.controller';
import { IUser } from '../users';
import bcrypt from 'bcryptjs';
import { NextApiHandler } from 'next';
import { getDoctorByStaffID } from '../controllers/doctor.controller';
interface Credentials {
  email: string;
  password: string;
}
export interface MySession extends Session {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    image: string;
  };
}
interface MyUser extends User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
}
export const options: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as MyUser;
      }
      return Promise.resolve(session);
    },
  },
  secret: process.env.MONGODB_URI,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: '',
      clientSecret: '',
    }),
    Credentials({
      id: 'doctor-creds',
      name: 'doctor-creds',
      credentials: {
        staffId: { label: 'staffId', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(creds) {
        const { staffId, password } = creds as {
          staffId: string;
          password: string;
        };
        const doctor = await getDoctorByStaffID(staffId);
        if (!doctor) {
          throw new Error('No Doctor Found');
        }
        const isMatch = await bcrypt.compare(password, doctor.password);
        if (!isMatch) {
          throw new Error('Password doesnt Match');
        }
        return {
          id: doctor._id,
          name: doctor.name,
          email: doctor.email,
          phone: doctor.phone,
          isAdmin: true,
          image: doctor.image,
        };
      },
    }),
    Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: '' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as Credentials;
        const user: IUser | null = await getUserByEmail(email);
        if (!user) {
          throw new Error('No User Found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Password doesnt Match');
        }
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          isAdmin: false,
        };
      },
    }),
  ],
};
const Handler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default Handler;
