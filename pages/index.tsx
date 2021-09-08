// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  // TODO: Update OpenSea and Contract links
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/weedloot" },
    {
      name: "Twitter",
      url: "https://twitter.com/weed_loot",
    },
    {
      name: "Contract",
      url: "https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
    },
  ];

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeBags = () => {
    const shuffled = defaultBags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Weed Loot <small>(for Adventurers)</small></h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  {url.startsWith("/") ? (
                    // If link to local page use Link
                    <Link href={url}>
                      <a>{name}</a>
                    </Link>
                  ) : (
                    // Else, redirect in new tab
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>Weed Loot for stoned adventurers is stored on chain</p>
          <p>50% of proceeds are donated to <a href="/charity">charity</a></p>
          <p>Don&rsquo;t be part of the craze, be part of the blaze 💨</p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Example Bags:</span>
          {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            // TODO: Update OpenSea link
            <a
              href={`https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        {/* What is this? */}
          {/* Inspired by Loot */}
          {/* What's the utility? */}

        {/* Donations */}
          {/* Why we're passionate about donating proceeds */}
              {/* More in-depth about charity of choice */}
          {/* How we made our decision */}

        {/* Minting area */}
      </div>
    </Layout>
  );
}
