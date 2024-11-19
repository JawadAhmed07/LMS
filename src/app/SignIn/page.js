import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  console.log("Session ", session);
  if(session) redirect('/')
  return (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
           <form
             action={async () => {
               "use server"
               await signIn("google")
             }}
           >
            <input className="border p-2" placeholder="Enter your email" name="email"/>
            <input className="border p-2" placeholder="Enter your password" name="password"/>
           </form>
           <Button type="submit">Login to continue</Button>
    
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
