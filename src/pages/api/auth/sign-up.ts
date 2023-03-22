// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from './clientPromise';
type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   res.status(200).json({ name: 'John Doe' })
    if (req.method==='POST') {
        const {email, password, ...otherProps} = req.body;
        if (!email || !email.includes('@') || !password) {
            res.status(422).json({ message: 'Invalid Data' });
            return;
        }
        const db = (await clientPromise).db()
        const userExists = await db.collection('users').findOne({email})
        if (userExists) {
            res.status(422).json({ message: 'User already exists' });
            (await clientPromise).close()
            return;
        }
        const status = await db.collection('users').insertOne({email,password,...otherProps})
        res.status(201).json({ message: 'User created', ...status });
        //Close DB connection
        (await clientPromise).close()
        return
    }else{
        res.status(500).send({message:'Invalid Route'})
    }
}
