import { Request, Response } from 'express';
import { createSession, findSessions, updateSession } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from './../utils/jwt.utils';
import config from 'config'

export async function createUserSessionHandler(
    req: Request, 
    res: Response
) {
    // Validate the user's password
    const user = await validatePassword(req.body)

    if(!user) {
        return res.status(401).send("Invalid email or password")
    }

    // Create a session
    const session = await createSession(user._id, req.get("user-agent") || "")

    // Create an Access Token
    const accessToken = signJwt(
        { ...user, session: session._id }, 
        { expiresIn: config.get('accessTokenTtl') }
    )

    // Create a Refresh Token
    const refreshToken = signJwt(
        { ...user, session: session._id }, 
        { expiresIn: config.get('refreshTokenTtl') }
    )

    // Retrun access & Refresh Tokens
    return res.send({
        accessToken,
        refreshToken
    })
}

export async function getUserSessionHandler(req: Request, res: Response) {
    const userId = res.locals.user._id

    const sessions = await findSessions({
        user: userId,
        valid: true
    })

    return res.send(sessions)
}

export async function deleteSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session

    await updateSession({ _id: sessionId}, {valid: false});
    
    return res.send({
        accessToken: null,
        refreshToken: null
    })
}