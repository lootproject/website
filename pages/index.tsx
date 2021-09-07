// Imports
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/team-for-loot" },
    {
      name: "Twitter",
      url: "https://twitter.com/teamForLootNFT",
    },
    {
      name: "Contract",
      url: "https://etherscan.io/address/0xb0ce923d42ae2fc9572a1c69bce86a2451f4c667",
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
          <h1>Team</h1>

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
          <p>
            Team is randomized adventure team for loot generated and stored on
            chain.
            <br />
            Assemble your strongest team to get rare loot.
            <br /> Stats, images, and other functionality are intentionally
            omitted for others to interpret.
            <br />
            Feel free to use Team in any way you want.
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Example Teams:</span>
          {defaultBags.map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            <a
              href={`https://opensea.io/assets/0xb0ce923d42ae2fc9572a1c69bce86a2451f4c667/${id}`}
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

        {/* Rendering how to mined */}
        <div className={styles.home__feature}>
          <span>How to Mined:</span>
          Step #1 : Open url{" "}
          <a
            style={{ color: "teal" }}
            href="https://etherscan.io/address/0xb0ce923d42ae2fc9572a1c69bce86a2451f4c667#writeContract"
            target="_blank"
            rel="noreferrer"
          >
            https://etherscan.io/address/0xb0ce923d42ae2fc9572a1c69bce86a2451f4c667#writeContract
          </a>
          <br />
          Step #2 : Click Connect to Web3 and Select Metamask <br />
          Step #3 : Go to claim <br />
          Step #4 : Input any unclaimed tokenID <br />
          Step #5 : Click Write
        </div>
      </div>
    </Layout>
  );
}
