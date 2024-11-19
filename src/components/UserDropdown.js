"use client";

import { signIn, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function UserDropdown({ session }) {
  return session ? (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session.user.picture || "/default-avatar.png"} alt="User Avatar" />
          <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <a href="/admin" className="w-full">Dashboard</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/settings" className="w-full">Settings</a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>
          <span className="text-red-500">Sign Out</span>
        </DropdownMenuItem>
        <h1>{session.user.email}</h1>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Link href={"/SignIn"}>
    <button
      className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200"
    >
      Sign In
    </button>

    </Link>
  );
}
