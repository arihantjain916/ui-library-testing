"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const handleGoogleSignIn = () => {
  signIn("google");
};

const handleGithubSignIn = () => {
  signIn("github");
};

const handleLogOut = () => {
  signOut();
};

export default function Home() {
  const { status, data: session } = useSession();
  if (status !== "authenticated") {
    return (
      <Card className="w-[400px] mx-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={handleGithubSignIn}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create account</Button>
        </CardFooter>
      </Card>
    );
  }
  return (
    <>
      <p>Hello {session?.user?.email}</p>
      <img
        src={session?.user?.image as string}
        alt={session?.user?.name as string}
      />
      <button
        className="mt-3 border-2 border-white rounded-md p-2"
        onClick={handleLogOut}
      >
        LogOut
      </button>
    </>
  );
}
