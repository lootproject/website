// Imports
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/Resources.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

export default function Resources(): ReactElement {
  // Loot resources
  const resourceList: Record<string, string>[] = [
    {
      name: "Loot Rarity",
      description: "Loot attributes and rarities sheet by @AustinGreen",
      url: "https://docs.google.com/spreadsheets/d/1Al0Yi-tM7K_05pCKjkQtSJjwbV2jMfac1i_oC4j2EYI/edit",
    },
    {
      name: "dhof-loot",
      description:
        "All bags, item occurences, bag rarity, and images by @anish-agnihotri and @ktasbas",
      url: "https://github.com/Anish-Agnihotri/dhof-loot",
    },
    {
      name: "Loot subgraph",
      description: "Loot bag, owner, and transfer subgraph by @shahruz",
      url: "https://thegraph.com/legacy-explorer/subgraph/shahruz/loot",
    },
    {
      name: "loot-sdk",
      description: "TypeScript wrapper to loot subgraph by @shahruz",
      url: "https://www.npmjs.com/package/loot-sdk",
    },
    {
      name: "0xinventory.app",
      description: "Loot bag and item rarity explorer by @scotato",
      url: "https://0xinventory.app/",
    },
    {
      name: "Divine Roles",
      description:
        "Discord for adventurers with bags containing Divine Robes by @shahruz",
      url: "https://divineroles.vercel.app/",
    },
    {
      name: "Robes.Market",
      description:
        "Floor tracker for bags containing Divine Robes by @worm#6888",
      url: "https://robes.market/",
    },
  ];

  return (
    <Layout>
      <div className={styles.resources}>
        {/* Resource page description */}
        <h2>Resources</h2>
        <p>Aggregated resources built by the Loot community:</p>

        <ul>
          {resourceList.map(({ name, description, url }, i) => {
            // For each resource, render link and description
            return (
              <li key={i}>
                <p>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>{" "}
                  — {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
