// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement, useState } from 'react';
import { useWalletContext } from "hooks/useWalletContext";
import { MobileNav } from "./MobileNav"
import { MouseEventHandler } from "react";
import Menu from "../img/menu.svg";
type NavProps = {
  onClick?: MouseEventHandler;
  hidden: boolean;
};

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {

  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />
      <MobileNav hidden={hidden} onClick={() => setHidden(hidden => !hidden)} />
      {/* Page content */}

      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>Loot</title>
      <meta name="title" content="Loot" />
      <meta
        name="description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lootproject.com/" />
      <meta property="og:title" content="Loot" />
      <meta
        property="og:description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />
      <meta property="og:image" content="https://lootproject.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lootproject.com/" />
      <meta property="twitter:title" content="Loot" />
      <meta
        property="twitter:description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />
      <meta property="twitter:image" content="https://lootproject.com/meta.png" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&family=Inconsolata:wght@300&display=swap"
        rel="stylesheet"
      />
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header(props: NavProps) {
  // Collect current path for active links
  const { pathname } = useRouter();
  const { connectWallet, isConnected, disconnectWallet, displayName } =
    useWalletContext();
  const { hidden, onClick } = props;

  // All links
  const links = [
    {
      name: "Chapters",
      path: "/"
    },
    {
      name: "Marketplaces",
      path: "/marketplaces"
    },
    {
      name: "Build",
      path: "/build"
    },
    {
      name: "Resources",
      path: "/resources",
    },
    { name: "FAQ", path: "/faq" },
    { name: "Forum", path: "https://loot-talk.com/" },
  ];

  return (
    <div className="w-full flex justify-between py-2 bg-black px-4">
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a><h2>Loot</h2></a>
        </Link>
      </div>

      {/* Navigation */}
      <div className="self-center hidden sm:block">
        <ul className="flex space-x-8">
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li className="self-center text-xl" key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                        "bg-gray-900 px-4 py-2 rounded"
                        : undefined + "bg-gray-900 px-4 py-2 rounded"
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}

        </ul>
      </div>
      <div className="self-center block sm:hidden">
        <button onClick={onClick} ><Menu /></button>
      </div>
      <div className="self-center hidden sm:block">
        <ul className="flex space-x-4 mr-auto">
          <li className="bg-gray-700 px-4 py-1 rounded  ml-auto">
            {isConnected && (
              <span>
                {displayName} {" "}
                <a
                  className={[styles.header__links_active, 'cursor-pointer'].join(' ')}
                  onClick={disconnectWallet}
                >
                  [ disconnect ]
                </a>
              </span>
            )}
            {!isConnected && (
              <button className={[styles.header__button, 'cursor-pointer'].join(' ')} onClick={connectWallet}>
                Connect to Lootverse
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>

  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <p>
        This website is{" "}
        <a
          href="https://github.com/lootproject/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
        .
      </p>
    </div>
  );
}
