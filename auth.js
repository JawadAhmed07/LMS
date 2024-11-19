import { connectDb } from "@/lib/dbConnect"
import { UserModal } from "@/lib/modals/UserModal";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handleLoginuser = async (profile) => {
  await connectDb();

  const user = await UserModal.findOne({ email: profile.email })

  if (user) {
    return user;
  } else {
    const obj = {
      fullname: profile.name,
      email: profile.email,
      provider: "google",
      profileImage: profile.picture,
    };
    let newUser = await new UserModal(obj)
    newUser = await newUser.save()
    return newUser;

  }

}

export const { handlers, signIn, signOut, auth } = NextAuth({

  providers: [Google,
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null
        console.log("credentials=>",credentials)
 
        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash)
 
        // if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          // throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        // return user
      // },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("account=>", account)
      console.log("profile=>", profile)

      const user = await handleLoginuser(profile);
      return { ...profile, role: user.role };
    },
    async jwt({ token }) {
      console.log("token=>", token)
      const user = await handleLoginuser(token)
      console.log("user in JWT=>", user)
      token.role=user.role;
      token._id=user._id;
      return token;
    },
    session({ session, token }) {
      session.user._id = token.id;
      session.user.role = token.role;
      return session;
    }
  },
})
