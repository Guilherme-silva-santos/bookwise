import PrismaAdapter from "@/services/database/prisma-adapter"
import { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"


export function buildNextAuthOptions(
  req: NextApiRequest, 
  res: NextApiResponse
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GithubProvider({
        clientId: process.env.BOOKWISE_CLIENT_ID!,
        clientSecret: process.env.BOOKWISE_CLIENT_SECRET!,
        authorization: {
          params: {
            scope: 'read:user user:email',
          },
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_SECRET_ID!,
        authorization: {
          params: {
            scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
      }),
    ],
    callbacks: {
      async session({session, user}) {
        return {
          ...session,
          ...user,
        }
      }
    },
    secret: process.env.NEXTAUTH_SECRET!
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}