import { NextFetchEvent, NextRequest, NextResponse  } from 'next/server'
import Databese from '../assets/database'
import { Categorys } from '../assets/entities/Categorys'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    // get request page
    const page = req.url.split('/')[1]
    // get categorys from db
    // await Databese()
    // const categorys = await Categorys.find()
    
    // if (page === 'ophold') {
    //     // do something
    //     return NextResponse.rewrite('/')
    // }
        
}