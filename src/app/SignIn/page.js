
// import { Button } from "@/components/ui/button"
// import { auth, signIn } from "../../../auth";
// // import { signIn, auth } from "../../../auth"

// export default async function SignIn() {
//   const session = await auth();
//   console.log("session=>",session);
//   return (
//     <div className="container min-h-screen mx-auto flex justify-center items-center">
//       <form
//         action={async () => {
//           "use server"
//           await signIn("google")
//         }}
//       >
//         <Button type="submit">Signin with Google</Button>
//       </form>

//     </div>
//   )
// } 

// Import the necessary NextAuth methods
import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";

export default async function SignIn() {
  const session = await auth();

  console.log("Session =>", session);

  // Handle the case where the user is already authenticated
  // if (status === "authenticated") {
  //   return (
  //     <div className="container min-h-screen mx-auto flex justify-center items-center">
  //       <h2>Youre already signed in!</h2>
  //     </div>
  //   );
  // }

  // If the user is not authenticated, show the sign-in button
  return (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
           <form
             action={async () => {
               "use server"
               await signIn("google")
             }}
           >
             <Button type="submit">Signin with Google</Button>
           </form>
    
         </div>
  );
}
