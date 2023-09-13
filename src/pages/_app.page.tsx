import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';

import { Nunito } from 'next/font/google';
import { SessionProvider } from "next-auth/react"
import { GlobalStyles } from '@/styles/globals';
import { ModalControllerProvider } from '@/contexts/ModalsContext';

const nunito = Nunito({ 
  weight: ['400', '700'],
  subsets: ['latin']
})

GlobalStyles()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <main className={`${nunito.className}`}>
      <ModalControllerProvider>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </ModalControllerProvider>
    </main>
  )
}
