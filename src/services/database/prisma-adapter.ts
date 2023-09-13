import { prisma } from "@/services/database/prismadb"
import { Console } from "console"
import { NextApiRequest, NextApiResponse } from "next"
import type { Adapter } from "next-auth/adapters"

export default function PrismaAdapter(
  req: NextApiRequest, 
  res: NextApiResponse
): Adapter {
  return {
    async createUser(user) {
      console.log('CREATE USER =>')
      
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name!,
          email: user.email,
          avatar_url: user.image!,
        }
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        emailVerified: null,
        avatar_url: prismaUser.avatar_url!,
      }
    },
    async getUser(id) {
      console.log('GET USER => ', id)
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })

      if(!user) return null

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        image: user.avatar_url,
      }
    },
    async getUserByEmail(email) {
      console.log('GET USER BY EMAIL => ', email)
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if(!user) return null

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: null,
        image: user.avatar_url,
      }
    },
    async getUserByAccount({ providerAccountId, provider }) {
      console.log('GET USER BY ACCOUNT => ')
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider: provider,
            provider_account_id: providerAccountId
          }

        },
        include: { user: true }
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },
    async updateUser(user) {
      console.log('UPDATE USER => ')
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name!,
          email: user.email,
          avatar_url: user.image,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!,
        emailVerified: null,
        avatar_url: prismaUser.avatar_url!,
      }

    },
    async linkAccount(account) {
      console.log('LINK ACCOUNT => ')
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },
    async createSession({ sessionToken, userId, expires }) {
      console.log('CREATE SESSION => ')
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      })

      return {
        sessionToken,
        userId,
        expires,
      }

    },
    async getSessionAndUser(sessionToken) {
      console.log('GET SESSION AND USER => ')
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...session } = prismaSession

      return {
        session: {
          userId: session.user_id,
          expires: session.expires,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          emailVerified: null,
          avatar_url: user.avatar_url!,
        },
      }
    },
    async updateSession({ sessionToken, userId, expires }) {
      console.log('UPDATE SESSION => ')
      const prismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })

      return {
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
        expires: prismaSession.expires,
      }
    },
    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}