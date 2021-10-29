// Imports
import { WalletProvider } from "hooks/useWalletContext";
import { GTMPageView } from '../utils/gtm';
import Router from 'next/router';
import React, { useEffect } from 'react';
import "@styles/global.scss";
import "@styles/app.css";

// Types
import type { AppProps } from "next/app";

// Export application
export default function LootRNG({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
  return (
    <WalletProvider>
      <Component {...pageProps} />{" "}
    </WalletProvider>
  );
}
