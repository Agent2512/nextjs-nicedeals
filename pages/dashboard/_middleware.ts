import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { Users } from '../../assets/entities/Users';
import { verifyJWT } from '../../assets/jwt';



export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const userToken = req.cookies.userToken
    
    if(userToken == undefined) {
        return NextResponse.redirect("/login");
    }

    const user = await verifyJWT<Users>(userToken, "user")

    if(user == false) {
        return NextResponse.redirect("/login");
    }
}



