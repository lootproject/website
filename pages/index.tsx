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

          {/* Project Description */}
          <p>Weed Loot for stoned adventurers is stored on chain</p>
          <p>50% of proceeds are donated to <a href="#charity">charity</a></p>
          <p>Don&rsquo;t be part of the craze, be part of the blaze 💨</p>

          {/* CTA */}
          {/* TODO: Update link */}
          <div className={styles.home__cta}>
            <p className={styles.home__cta_promo}>
              First 420 minted for .01Ξ before price change to .02Ξ
            </p>
            <a href="#" className="button" title="Mint a piece of Weed Loot">
              🔥 <span className="button_text">Mint</span> 🔥
            </a>
          </div>
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

        {/* Donations */}
        <div className={`container ${styles.home_description}`} id="charity">
          <h2>
            50% of proceeds donated to charity
          </h2>

          <p>We love memes, weed, <em>and</em> making an impact.</p>

          <p>More text about the charity that we're donating to and how, specifically, we've baked donation into our project (i.e., through the smart contract).</p>

          <p>Text about how we made the decision for this organization.</p>

          <p>Text about how donations will be handled throughout the lifecycle of the project.</p>
        </div>

        {/* Minting area */}
      </div>
    </Layout>
  );
}
