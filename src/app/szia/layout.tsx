import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/toaster";
import {toast} from "sonner"



export const metadata: Metadata = {
  title: "Bakonykuti",
  description: "Bakonykuti website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
  modal,
}: Readonly<{
   children: React.ReactNode;
   modal: React.ReactNode;
  }>) {
  return (
    <ClerkProvider>
      
    <html lang="en" className={`${GeistSans.variable}`}>
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
      <body className= {`font-sans flex_col gap-5 dark`}>
        <TopNav />
        {children}
        {modal}
        <Toaster/>
        <div id="modal-root"/>

        <script>
          
          
        </script>	
      </body>

    </html>
    </ClerkProvider>
  );
}
