"use client";
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav(){
    const router = useRouter();
    return (
      <nav className="flex item-center justify-between w-full p-4 text-x1 font-semibold border-b">
        <div>Bakonykuti</div>
  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" onClientUploadComplete={()=>{
                router.refresh()
                }}>

              </UploadButton>
                <UserButton />
            </SignedIn>


        </div>
      </nav>
    )
  }