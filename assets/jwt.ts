import { jwtVerify, JWTVerifyResult, SignJWT } from "jose"
import { nanoid } from "nanoid"

export const verifyJWT = async <T>(token: string, field: string) => {
    const result = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET || '123456')
    ).catch(() => false) as JWTVerifyResult | false

    if (result == false) {
        return false
    }

    return result.payload[field] as T
}


export const createJWT = async (payload: object) => {
    return await new SignJWT(payload as any)
        .setProtectedHeader({ alg: 'HS512' })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(new TextEncoder().encode(process.env.JWT_SECRET || '123456'))
}