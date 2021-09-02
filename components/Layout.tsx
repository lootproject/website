// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

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
      <title>Loot — For Adventurers</title>
      <meta name="title" content="Loot — For Adventurers" />
      <meta
        name="description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lootrng.com/" />
      <meta property="og:title" content="Loot — For Adventurers" />
      <meta
        property="og:description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />
      <meta property="og:image" content="https://lootrng.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lootrng.com/" />
      <meta property="twitter:title" content="Loot — For Adventurers" />
      <meta
        property="twitter:description"
        content="Loot is randomized adventurer gear generated and stored on chain."
      />
      <meta property="twitter:image" content="https://lootrng.com/meta.png" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
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
  // All links
  const links = [
    { name: "FAQ", path: "/faq" },
    { name: "Resources", path: "/resources" },
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
          href="https://github.com/anish-agnihotri/lootrng.com"
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
