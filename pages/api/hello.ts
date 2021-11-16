// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Databese from '../../assets/database'

type Data = {
  name: string
}

export default function handler(  req: NextApiRequest,  res: NextApiResponse<Data>) {
  // let databese = new Databese()

  res.status(200).json({ name: 'John Doe' })
}
