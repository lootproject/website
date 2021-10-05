// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { resources } from "../utils/newLists"
import {
  derivativesList,
  guildsList,
  marketsList,
  resourceList,
  communityList
} from "@utils/lists"; // Lists
// Types
import type { ReactElement } from "react";

export default function Resources(): ReactElement {
  const resourcesIndex = [
    {
      title: "Communities",
      description: "Spaces run by the community for Loot enthusiasts to share news and build together:",
      list: communityList,
    },
    {
      title: "Developer Tooling",
      description: "Aggregated resources built by the Loot community:",
      list: resourceList,
    },
    {
      title: "Guilds",
      description: "Guild divided by items and attributes:",
      list: guildsList,
    },
    {
      title: "Market Trackers",
      description: "Tools to keep track of Loot by attributes:",
      list: marketsList,
    },
    {
      title: "Derivative Projects",
      description: "Projects that remix or build on top of Loot. Because Loot is decentralized, there are *no* 'official' derivatives, tokens, or DAOs. Please note that this list is community submitted and projects are *not* audited. Large errors are possible, up to and including loss of funds. Do your own research and proceed with caution:",
      list: derivativesList,
    },
  ];
  return (
    <Layout>
      <div className="bg-black py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl ">
              <h1 className="text-center mt-4">Resources</h1>
            </div>
          </div>
          {resources.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div>
        {resources.map(({ title, description, list }, i) => {
          return (
            <div key={i} className={styles.resources}>
              <h2>{title}</h2>
              <p>{description}</p>

              <ul>
                {list.map(({ name, description, url }, i) => {
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
          );
        })}
      </div>

    </Layout>


  )
}