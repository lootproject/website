// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Synthetic Loot</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is Synthetic Loot?</h3>
          <p>
            Synthetic Loot (or &quot;Synthloot&quot;) is a virtual form of Loot that <strong>every wallet has automatically</strong> and <strong>does not need to be minted</strong>.
          </p>
          <p>
            Unlike original Loot which is generated based on a numeric identifier, Synthetic Loot is generated based on your Ethereum wallet address. Developers who are building on top of Loot can easily incorporate Synthetic Loot into their projects, allowing the entire Ethereum ecosystem to access their projects for free.
          </p>
          <p>To see this in action, visit <a href="https://loot.stephancill.co.za/#/">this example page</a> and enter your wallet address or ENS handle. You will see your Snyth Loot and a generated character that corresponds to it.</p>
          <h3>Why can&apos;t I mint Synthetic Loot?</h3>
          <p>Right now, there is no reason to. Because Synthetic Loot is associated with every Ethereum address that ever has been or ever will be, there is no one &quot;without&quot; Synthetic Loot. Still, there is no reason someone couldn&apos;t build a mintable implementation on top of Synthetic Loot for those who want to do it.</p>
          <h3>What if someone re-rolls wallets to get &quot;great&quot; loot?</h3>
          <p>In many cases, this doesn&apos;t matter. However, developers who are concerned about this can instead use variants like <a href="https://etherscan.io/address/0x9f4541a829f8a8c0fb5f26971b0ed19f995782b1#code">Synthetic Lesser Loot</a>, which reduces the rarity of some items. These variants still share all the same promises — available to every wallet automatically and no need to be minted.</p>
        </div>
      </div>
    </Layout>
  );
}
