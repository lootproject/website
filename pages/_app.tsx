// Imports
import "@styles/global.scss";
import '@styles/app.css'

// Types
import type { AppProps } from "next/app";

// Export application
export default function LootRNG({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
