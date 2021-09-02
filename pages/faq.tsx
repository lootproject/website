// Imports
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Loot?</h3>
          <p>
            Loot is a collection of 8,000 unique bags of adventurer gear,
            originally released by{" "}
            <a
              href="https://twitter.com/dhof/status/1431316631934967815"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dom Hofmann
            </a>
            . At release, anyone could claim loot bags for just gas, and all
            bags were claimed in under 4 hours. Each loot bag contain 8 items: a
            piece each for an adventurers chest, foot, hand, head, neck, ring,
            waist, and weapon.
          </p>
          <p>
            Loot is an unaudited project. Bags #1 to #7777 were claimable by
            anyone and #7778 to #8000 are currently reserved for the contract
            deployer (Dom).
          </p>
        </div>

        {/* How do I value loot bags? */}
        <div className={styles.faq__item}>
          <h3>How do I value Loot bags?</h3>
          <p>
            They say that value is always in the eye of the beholder. Loot is no
            different, with no explicit rarities specified at launch. How you
            value a loot bag is up to you.
          </p>
          <p>
            Still, the community has begun to devise many mechanisms by which to
            assess the rarity of bags and their items. Some of these include{" "}
            <a
              href="https://github.com/Anish-Agnihotri/dhof-loot/blob/master/output/rare.json"
              target="_blank"
              rel="noopener noreferrer"
            >
              rarity by occurence
            </a>{" "}
            or{" "}
            <a
              href="https://0xinventory.app/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              item score
            </a>
            .
          </p>
          <p>Remember, use your own discretion when valuing a loot bag.</p>
        </div>
      </div>
    </Layout>
  );
}
