// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

// Construct our page layout
export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      <Head />
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

/**
 * Constants
 */
const url = 'https://weedloot.xyz/'
const title = 'Weed Loot';
const description = 'Loot for stored adventurers. 50% of proceeds donated to charity.';
const socialImage = url + 'social.jpg';

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description}
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={socialImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={socialImage} />

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
          <a>Weed Loot</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        {/* <ul>
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
        </ul> */}
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
          href="https://github.com/keenanpayne/weedloot.xyz"
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
