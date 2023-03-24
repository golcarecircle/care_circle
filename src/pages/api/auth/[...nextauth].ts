import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import Credentials from 'next-auth/providers/credentials'

import clientPromise from './clientPromise';

export default NextAuth({
    session:{
        jwt: true
    },
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        // OAuth authentication providers...
        Credentials({
            async authorize(creds:{email:string,password: string}){
                const users = (await clientPromise).db().collection('users');
                const res = await users.findOne({email:creds.email})
                if (!res) {
                    (await clientPromise).close();
                    throw new Error("No User Found");
                }
                if (creds.password!==res.password) {
                    (await clientPromise).close();
                    throw new Error("Password doesnt Match");
                    
                }
                (await clientPromise).close();
                return {email: res.email}
            }
        })
    ]
})