import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {

      console.log(account)
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
})