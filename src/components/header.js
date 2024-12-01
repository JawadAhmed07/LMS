import { auth } from "../../auth";
import UserDropdown from "./UserDropdown"; // Client Component for dropdown

export default async function Header() {
  const session = await auth();
  console.log("session=>", session)

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-bold">LMS</h1>
        <nav>
          <UserDropdown session={session} />
        </nav>
      </div>
    </header>
  );
}

