// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, whatToDo, getAfterLoot, getYourCharacter, onlyLoot } from "../utils/newLists"
import Path from "../img/path.svg";
// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  const router = useRouter();
  const subLinks: Record<string, string>[] = [
    {
      name: "Loot.exchange",
      url: "https://www.loot.exchange/",
    },
    {
      name: "Opensea",
      url: "https://opensea.io/collection/lootproject"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/lootproject",
    },
  ];
  return (
    <Layout>
      <div className="mx-auto px-4 text-center py-10 sm:py-20 justify-around flex flex-wrap hero-img bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="px-4">
            <h1>Loot</h1>

            <p className="sm:text-2xl">Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.</p>
            <div>
              <nav className="my-8 flex flex-wrap justify-center">
                {subLinks.map(({ name, url }, i) => {
                  return (<Link key={i} href={url}>
                    <a className={router.pathname == url ? "bg-gray-800 py-1 px-4 sm:p-4 mx-4 rounded-xl border border-gray-900" : "px-4  sm:p-4 mx-4 py-1 hover:bg-gray-800 rounded-xl"} >{name}</a>
                  </Link>)
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-auto sticky top-0 bg-black w-full justify-center text-sm space-x-10 py-4 z-10 sm:text-2xl font-display">
        <div>
          <a className="hover:text-gray-600" href="#start">Start Here</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter1">1. Gear Up</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter2">2. Character</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter3">3. Games</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter3">3. A Quest</a>
        </div>
      </div>
      <div id="start" className="bg-black  sm:py-20 py-10 pb-40 bg-gradient-to-b from-black to-gray-1000">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 ">
              <span className="uppercase sm:text-2xl ">The Quest begins here</span>
              <h1 className="text-center mt-4 capitalize">Start here: Get a Loot Bag</h1>
              <p className="sm:text-2xl">8,000 Bags full of Loot, discovered by Adventurers. Where did they come from? What stories do they hold? Collect a bag, learn its story, and begin your adventure. </p>
            </div>
          </div>
          {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
          {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter1" className=" sm:py-20 py-10 pb-40 bg-gradient-to-b from-gray-1000 to-gray-800">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-2xl ">Chapter 1</span>
              <h1 className="text-center mt-4 capitalize">Gear up</h1>
              <p className="sm:text-2xl">Mint, Claim or Trade additional items</p>
            </div>
          </div>

          {getAfterLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className="bg-gradient-to-b from-gray-800 to-gray-700 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-2xl">Chapter 2</span>
              <h1 className="text-center mt-4">Get your Character</h1>
              <p className="sm:text-2xl">Who carried these Loot bags? Where did they come from? What can you do with these treasures? Your adventure begins now.</p>
            </div>
          </div>


          {getYourCharacter.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className="bg-gradient-to-b from-gray-700 to-gray-600 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase sm:text-2xl">Chapter 3</span>
              <h1 className="text-center mt-4">Fun & Games</h1>
              <p className="sm:text-2xl">Who carried these Loot bags? Where did they come from? What can you do with these treasures? Your adventure begins now.</p>
            </div>
          </div>


          {whatToDo.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter3" className="bg-gradient-to-b from-gray-600 to-gray-300 py-20 text-black ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 rounded text-center text-white">
              <span className="uppercase sm:text-2xl">Chapter 4</span>
              <h1 className="text-center mt-4 ">A Quest for Adventurers</h1>
              <p className="sm:text-2xl italic">"O Adventurer, look at you…"</p>
            </div>
          </div>
          <div className="text-center sm:text-2xl my-4 sm:w-2/3 mx-auto px-4  text-white">
            <p className="my-4">How did we let it come to this? Sitting on thrones of aging treasure, weaving tales of journeys past and beasts slain.</p>

            <p className="my-4">A storm is brewing and it intends to swallow us whole. Can you feel it in the wind?</p>
            <p className="my-4">This world needs us once more. Will you join and fight for it? Or will you watch from afar, singing past travails and flipping for coin?</p>

            <p className="my-4">From the deepest depths, <br></br>
            To the highest peaks, <br></br>
            Forgotten friends and spoils reaped,</p>


          </div>
        </div>
      </div>
    </Layout>
  );
}
