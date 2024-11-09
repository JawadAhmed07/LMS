
import { Button } from "@/components/ui/button"
import { signIn } from "../../../auth"
 
export default function SignIn() {
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
  )
} 