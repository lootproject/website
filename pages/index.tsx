// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import {CardRow} from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import {whatToGet, whatToDo} from "../utils/newLists"


// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/lootproject" },
    {
      name: "Twitter",
      url: "https://twitter.com/lootproject",
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
        <div className="container mx-auto mt-8">
          <h1>Chapter 1: Finding the Bags</h1>
          {whatToGet.map(({ name, description, project }, i) => {
                return (
                  <CardRow key={i} name={name} description={description} project={project}/>
                );
              })}
        </div>
        <div className="bg-black py-20">

      
        </div>
      </div>
    </Layout>
  );
}
