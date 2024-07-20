"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export const Header = () => {
  const { status } = useSession();
  const router = useRouter();
  return (
    <header className="flex justify-between items-center p-2 border-b-2 mb-2">
      <div id="logo">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Arihant Jain
        </div>
      </div>

      {status === "authenticated" ? (
        <div id="buttons">
          <div id="register" className="">
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </div>
      ) : (
        <div id="buttons">
          <div id="register" className="">
            <Button onClick={() => router.push("/auth/register")}>
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
