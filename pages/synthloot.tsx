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
            Synthetic Loot (or &quot;Synth Loot&quot;) is a virtual form of Loot that <strong>every wallet has automatically</strong> and <strong>does not need to be minted</strong>.
          </p>
          <p>
            Unlike original Loot which is generated based on a numeric identifier, Synthetic Loot is generated based on your Ethereum wallet address. Developers who are building on top of Loot can easily incorporate Synthetic Loot into their projects, allowing the entire Ethereum ecosystem to access their projects for free.
          </p>
          <p>To see this in action, visit <a href="https://loot.stephancill.co.za/#/">this example page</a> and enter your wallet address or ENS handle. You will see your Synth Loot and a generated character that corresponds to it.</p>
          <p>This data is portable and will travel with you to any project that supports it.</p>
          <h3>Why can&apos;t I mint Synthetic Loot?</h3>
          <p>Right now, there is very little reason to. Because Synthetic Loot is already associated with every Ethereum address that ever has been or ever will be, there will never be anyone &quot;without&quot; Synthetic Loot. Still, there is no reason someone couldn&apos;t build a mintable contract on top of Synthetic Loot for those who want to do it.</p>
          <h3>What if someone re-rolls wallets to get desirable loot?</h3>
          <p>In many cases, this doesn&apos;t matter. However, developers who are concerned about this can instead use variants like <a href="https://etherscan.io/address/0x9f4541a829f8a8c0fb5f26971b0ed19f995782b1#code">Synthetic Lesser Loot</a>, which reduces the rarity of some items. Synthetic variants still share all the same promises: they are available to every wallet automatically and do not need to be minted.</p>
          <h3>Why not expand the original Loot bag numbers past 8,000?</h3>
          <p>The original Loot contract is immutable, meaning it is impossible to change. Although it is possible to create new contracts that expand the numbers, it is purely up to the community to decide whether or not to do this and for developers to decide what is and isn&apos;t recognized.</p>
          <p>It&apos;s important for the community to think about precedents. Expanding in small increments now only kicks the can down the road. As more people want Loot, more contracts will need to be created, which will lead to fragmentation where infrastructure and utilities that are built today will not work with the contracts of tomorrow.</p>
          <p>Conversely, the supply of Synthetic Loot is always equal to the number of Ethereum wallets and will always be forward compatible.</p>
          <h3>Acknowledgements</h3>
          <p>Thank you to community member <a href="https://twitter.com/stephancill">@stephancill</a> for creating the demonstration page.</p>

        </div>
      </div>
    </Layout>
  );
}
