// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Databese from '../../assets/database'
import { Users } from '../../assets/entities/Users'



export default async function handler(  req: NextApiRequest,  res: NextApiResponse) {
  const database = await Databese()
  // const entities = database.entityMetadatas

  Users.create({
    username: 'test',
    firstName: 'test',
    lastName: 'test',
    email: 'test@test.dk',
    password: 'test'
  }).save()



  res.status(200).json({ name: 'John Doe' })
}
