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
          <p>Weed Loot is randomized adventurer gear generated and smoked on chain. Stats, Images, and other functionality are intentionally omitted for others to interpret. Feel free to use Weed Loot in any way you want.</p>

          <p>50% of proceeds are donated to <a href="https://www.lastprisonerproject.org/" target="_blank">The Last Prisoner Project</a></p>

          {/* CTA */}
          {/* TODO: Update link */}
          <div className={styles.home__cta}>
            <p className={styles.home__cta_promo}>
              First <strong>420</strong> minted for <strong>.01Ξ</strong> before price change to <strong>.02Ξ</strong>
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
            50% of proceeds donated to<br />The Last Prisoner Project
          </h2>

          <p className={styles.home__description_lede}>The Last Prisoner Project is a nonprofit organization dedicated to cannabis criminal justice reform. LPP was founded in 2019 out of the belief that if anyone is able to profit and build wealth in the legal cannabis industry, those individuals must also work to release and rebuild the lives of those who have suffered from cannabis criminalization.</p>

          <p>From the LPP:</p>
          
          <blockquote>
            <p>“Imagine sitting in a cell for years, decades, or even for life, convicted of an activity that is no longer a crime, while thousands of other people build intergenerational wealth doing exactly the same thing.</p>
          
            <p>That’s the situation that over 40,000 cannabis prisoners face today in the United States alone, while countless others languish in jails and prisons worldwide.</p>
            
            <p>The Last Prisoner Project has one singular mission: to set them free.”</p>
          </blockquote>
        </div>

        {/* Minting area */}
      </div>
    </Layout>
  );
}
