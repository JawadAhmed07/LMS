import { connectDb } from "@/lib/dbConnect"
import { UserModal } from "@/lib/modals/UserModal";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const handleLoginuser=async (profile)=>{
  await connectDb();

  const user=await UserModal.findOne({email:profile.email})

  if (user){
    return user;
  }else{
    const obj={
      fullname: profile.name,
      email: profile.email,
      provider:"google",
      profileImage: profile.picture,
    };
    let newUser=await new UserModal(obj)
    newUser=await newUser.save()
    return newUser;

  }
  
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  
  providers: [Google],
  callbacks: {
  async signIn({ account, profile }) {
    console.log("account=>",account)
    console.log("profile=>",profile)

    const user = await handleLoginuser(profile);
    return {...profile,role:user.role};
  },
},
})

// callbacks: {
//   async signIn({ account, profile }) {
//     if (account.provider === "google") {
//       return profile.email_verified && profile.email.endsWith("@example.com")
//     }
//     return true // Do different verification for other providers that don't have `email_verified`
//   },
// },