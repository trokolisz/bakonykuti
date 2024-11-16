import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images(){

  const images = await getMyImages();
  return (
    images.map((image) => (
    <div key={image.id} className="w-48 p-2 flex flex-col">     
      <Link href={`/img/${image.id}`}>
      
      <img src={image.url}/>

      <div>{image.name}</div>
      </Link>
    </div>
  )));
}

export default async function HomePage() {

  return (

    <main className="flex min-h-screen flex-col bg-gradient-to-b text-white">
      <div className="flex flex-wrap gap-4">
      <SignedOut>
        <div>Sign in to see your images</div>
      </SignedOut>
      <SignedIn>
        

        <Images/>

      </SignedIn> 

      </div>
       

    </main>
  );
}
