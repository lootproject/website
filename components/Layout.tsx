// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { useEffect } from 'react';
// Types
import type { ReactElement } from "react";
import { useWalletContext } from "hooks/useWalletContext";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 460) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('fixed top-10 ');
  }

  const quicklinks: Record<string, string>[] = [
    {
      name: "Chapters",
      url: "/"
    },
    {
      name: "Marketplaces",
      url: "/marketplaces"
    },
    {
      name: "Build w/ Loot",
      url: "/build"
    },
    {
      name: "Resources",
      url: "/resources",
    },
  ];
  const subLinks: Record<string, string>[] = [
    {
      name: "Loot.exchange",
      url: "https://www.loot.exchange/",
    },
    {
      name: "Opensea",
      url: "https://opensea.io/collection/lootproject"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lootproject",
    },
  ];
  const router = useRouter();
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />
      <div className="container mx-auto px-4 text-center py-10 sm:pt-40 justify-around flex flex-wrap">
        <div className="sm:w-1/2">
          <h1>Loot</h1>
          <div>
            <nav className="my-8">
              {subLinks.map(({ name, url }, i) => {
                return (<Link key={i} href={url}>
                  <a className={router.pathname == url ? "bg-gray-800 py-1 px-4 sm:p-4 mx-4 rounded-xl border border-gray-900" : " px-4  sm:p-4 mx-4 py-1   hover:bg-gray-800 rounded-xl "} >{name}</a>
                </Link>)
              })}
            </nav>
          </div>
          <p className="sm:text-2xl">Loot is randomized adventurer gear generated and stored on chain.

          Stats, images, and other functionality are intentionally omitted for others to interpret.

        Feel free to use Loot in any way you want.</p>
        </div>
        <div className=" flex w-full justify-around mt-8 relative overflow-hidden ">
          <div className={navbarClasses.join(" ") + "sticky top-0 bg-gray-800 p-2 rounded-2xl flex sm:text-2xl tracking-wide flex-wrap justify-between"}>
            {quicklinks.map(({ name, url }, i) => {
              return (<Link key={i} href={url}>
                <a className={(router.pathname == url ? "bg-gray-900" : "hover:bg-gray-900") + " py-1 px-4 sm:p-4 mx-1 rounded-xl transition-all duration-150"} >{name}</a>
              </Link>)
            })}

          </div>
        </div>

      </div>
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
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();

  const { connectWallet, isConnected, disconnectWallet, displayName } =
    useWalletContext();

  // All links
  const links = [
    { name: "FAQ", path: "/faq" },
    { name: "Discord", path: "https://discord.gg/23gbrJ6pje" },
    { name: "Loot Talk", path: "https://loot-talk.com/" },
  ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>Loot</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                        styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
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
                Connect
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
