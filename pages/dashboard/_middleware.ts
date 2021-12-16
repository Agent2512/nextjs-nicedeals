import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { Users } from '../../assets/entities/Users';
import { verifyJWT } from '../../assets/jwt';



export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const userToken = req.cookies.userToken
    
    if(userToken == undefined) {
        return NextResponse.redirect("/login");
    }

    return verifyJWT<Users>(userToken, "user").then(user => {
        if (user == false) {
            return NextResponse.redirect("/login");
        }
    })
}



