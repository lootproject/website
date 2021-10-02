// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import {whatToGet} from "../utils/newLists"
import discord from "../img/discord.svg"

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
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Loot</h1>

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
            Loot is randomized adventurer gear generated and stored on chain.
            <br /> Stats, images, and other functionality are intentionally
            omitted for others to interpret. <br /> Feel free to use Loot in any
            way you want.
          </p>
        </div>
        <div className="container mx-auto">
          <h1>What to get</h1>
        {whatToGet.map(({ name, description, project }, i) => {
              return (
                <div className="my-8" key={i}>
                  <h2>{name}</h2>
                  <p className="sm:text-3xl mb-4">{description}</p>
                  <div className="flex sm:space-x-4 flex-wrap">
                    {project.map(({name, description, whatToDo, roadMap, website, contract}, i) => {                      
                     return (
                     <div key={i} className="bg-black rounded-xl sm:p-8 sm:w-1/4 shadow-xl">
                       <div className="flex text-white justify-between">
                        <h2>{name}</h2>
                        <Image className="fill-current w-8 h-8" src={discord} alt="Picture of the author" />
                       </div>
                          
                          <h5 className="uppercase mt-8 text-gray-600 ">About</h5>
                          <p className="text-xl">{description}</p>
                          <h5 className="uppercase mt-8 text-gray-600">What to do</h5>
                          <div className="py-2 w-full border-white border rounded-xl px-4 my-4">
                            {whatToDo}
                          </div>
                          <h5 className="uppercase mt-8 text-gray-600">Where is it going</h5>
                          <p className="text-xl">{description}</p>
                          <div className="flex mt-5 space-x-4">
                            <button className="border-white rounded border px-2 py-1">Website</button>
                            <button className="border-white rounded border px-2 py-1">Contract</button>
                          </div>
                          
                        </div>)
                    })}
                   </div>
                </div>
              );
            })}

        </div>

        {/* Rendering sample loot bags */}
        {/* <div className={styles.home__feature}>
          <span>Example Bags:</span>
          {getRandomThreeBags().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
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
        </div> */}
      </div>
    </Layout>
  );
}
