import type { NextApiRequest, NextApiResponse } from 'next'
import UserControl from '../../assets/controls/userControl'
import { Users } from '../../assets/entities/Users';
interface req extends NextApiRequest {
  query: {

  }
}


export default async function handler(req: req, res: NextApiResponse) {
  const usercontrol = new UserControl()

  let user: Users| false
  // user = await usercontrol.makeUser("agent2512", "niklas", "gadeberg", "spiler2512@live.dk", "123456789")
  user = await usercontrol.getUser_by_id(1001)
  
  return res.json({ user })
}
