// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import {whatToGet, whatToDo} from "../utils/newLists"
import Discord from "../img/discord.svg"
import Twitter from "../img/twitter.svg"

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
        <div className="container mx-auto mt-8">
          <h1>Chapter 1: Finding the Bags</h1>
        {whatToGet.map(({ name, description, project }, i) => {
              return (
                <div className="my-8" key={i}>
                  <h2>{name}</h2>
                  <div className="flex flex-wrap">
                    {project.map(({name, description, whatToDo, roadMap, website, contract}, i) => {                      
                     return (
                       <div key={i} className="px-2 w-full md:w-1/4 sm:w-1/2">
                        <div  className="bg-black rounded-xl p-5 sm:p-8  shadow-xl my-3  mx-3 sm:mx-0 transform hover:-translate-y-1 cursor-pointer transition duration-150 hover:bg-gray-1000">
                          <div className="flex text-white justify-between">
                            <h2 className="mr-auto">{name}</h2>
                            <a className="self-center " href="">
                              <Discord className="fill-current w-8 h-8 mx-2"/>
                            </a>
                            <a className="self-center" href="">
                              <Twitter className="fill-current w-6 h-6 mx-2"/>
                            </a>
                            
                          </div>
                              
                              <h5 className="uppercase mt-8 text-gray-600 ">About</h5>
                              <p className="text-xl">{description}</p>
                              <h5 className="uppercase mt-8 text-gray-600">What you Get</h5>
                              <div className="flex">
                                <div className="py-2 border-gray-600 border rounded px-4 my-4">
      
                                  {whatToDo}
                                </div>
                              </div>

                              <h5 className="uppercase mt-8 text-gray-600">Where is it going</h5>
                              <p className="text-xl">{description}</p>
                              <div className="flex mt-5 space-x-4">
                                <button className="border-gray-600 rounded border px-2 py-1">Website</button>
                                <button className="border-gray-600 rounded border px-2 py-1">Contract</button>
                              </div>
                              
                            </div>
                       </div>)
                    })}
                   </div>
                </div>
              );
            })}

        </div>
        <div className="bg-black py-20">

        
        <div className="container mx-auto mt-8">
          <h1>Chapter 2: The Adventures Begin</h1>
        {whatToDo.map(({ name, description, project }, i) => {
              return (
                <div className="my-8" key={i}>
                  <h2>{name}</h2>
                  <div className="flex sm:space-x-4 flex-wrap">
                    {project.map(({name, description, whatToDo, roadMap, website, contract}, i) => {                      
                     return (
                     <div key={i} className="bg-gray-900 rounded-xl p-5 sm:p-8 w-full md:w-1/4 sm:w-1/2 shadow-xl my-3 mx-3 sm:mx-0">
                       <div className="flex text-white justify-between">
                        <h2 className="mr-auto">{name}</h2>
                        <a className="self-center " href="">
                          <Discord className="fill-current w-8 h-8 mx-2"/>
                        </a>
                        <a className="self-center" href="">
                          <Twitter className="fill-current w-6 h-6 mx-2"/>
                        </a>
                        
                       </div>
                          
                          <h5 className="uppercase mt-8 text-gray-600 ">About</h5>
                          <p className="text-xl">{description}</p>
                          <h5 className="uppercase mt-8 text-gray-600">What you Get</h5>
                          <div className="flex">
                            <div className="py-2 border-gray-600 border rounded px-4 my-4">
  
                              {whatToDo}
                            </div>
                          </div>

                          <h5 className="uppercase mt-8 text-gray-600">Where is it going</h5>
                          <p className="text-xl">{description}</p>
                          <div className="flex mt-5 space-x-4">
                            <button className="border-gray-600 rounded border px-2 py-1">Website</button>
                            <button className="border-gray-600 rounded border px-2 py-1">Contract</button>
                          </div>
                          
                        </div>)
                    })}
                   </div>
                </div>
              );
            })}
        </div>
        </div>
      </div>
    </Layout>
  );
}
