import { Partners } from '../../assets/entities/Partners';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Databese from '../../assets/database'
import { Role, Roles } from '../../assets/entities/Roles'
import { Users } from '../../assets/entities/Users'
import { Deals } from '../../assets/entities/deals';
import { Categorys } from '../../assets/entities/Categorys';

interface req extends NextApiRequest {
  query: {
    id : string
  }
}


export default async function handler(req: req, res: NextApiResponse) {
  // get query from url

  const database = await Databese()


  let data = await Users.find()

  res.status(200).json({ data })
}
