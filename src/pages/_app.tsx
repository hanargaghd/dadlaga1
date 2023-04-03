import '@/styles/globals.css';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useState } from "react"

export default function App({ 
   Component, 
   pageProps: { session, ...pageProps },
 }: AppProps<{ session: Session }>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </SessionProvider>
  );
} 