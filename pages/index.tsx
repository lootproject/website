// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, whatToDo, gearUp, getYourCharacter, onlyLoot } from "../utils/newLists"
import Opensea from "../img/opensea.svg"
import Twitter from "../img/twitter.svg";
import ExchangeIcon from "../img/exchangeIcon2.svg";
import Discord from "../img/discord.svg";
// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {
  return (
    <Layout>
      <div className="flex flex-wrap justify-around px-2 py-10 mx-auto text-center sm:px-4 sm:py-20 hero-img bg-opacity-10">
        <div className="w-full sm:w-1/2">
          <div className="sm:px-4">
            <h1>Loot</h1>

            <p className="text-xl text-gray-300 sm:text-2xl">Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.</p>
            <div>
              <div className="flex justify-center w-full py-8 space-x-6">
                <a
                  href="https://www.loot.exchange/"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <ExchangeIcon className="w-6 h-6 mx-2 text-gray-400 fill-current hover:text-gray-200" />
                </a>
                <a
                  href="https://opensea.io/collection/lootproject"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <Opensea className="w-6 h-6 mx-2 hover:text-gray-200" />
                </a>
                <a
                  href="https://twitter.com/lootproject"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <Twitter className="w-6 h-6 mx-2 text-white fill-current" />
                </a>
                <a
                  href="https://discord.gg/KuYyKXam9G"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <Discord className="w-6 h-6 mx-2 text-white fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-10 flex flex-wrap justify-center w-full py-4 mx-auto space-x-6 text-sm bg-black sm:space-x-10 sm:text-2xl font-display">
        <div>
          <a className="hover:text-gray-600" href="#start">Get Loot</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter1">Gear Up</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter2">Character</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter3">Quests</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="https://loot.foundation" target="_blank">Lore</a>
        </div>
      </div>
      <div id="start" className="py-10 pb-40 bg-black sm:py-20 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3 ">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">The Quest begins here</span>
              <h1 className="mt-4 text-center capitalize">Start here: Get a Loot Bag</h1>
              <p className="text-xl text-gray-400 sm:text-2xl">8,000 Bags full of Loot, discovered by Adventurers. Where did they come from? What stories do they hold? Collect a bag, learn its story, and begin your adventure. </p>
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
      <div id="chapter1" className="py-10 pb-40 bg-gray-800 sm:py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 1</span>
              <h1 className="mt-4 text-center capitalize">Gear up</h1>
              <p className="text-gray-400 sm:text-2xl">Mint, claim, or trade additional items</p>
            </div>
          </div>

          {gearUp.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className="py-20 bg-gray-700 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 2</span>
              <h1 className="mt-4 text-center">Get Your Character</h1>
              <p className="text-gray-400 sm:text-2xl">Who carried these Loot bags? Where did they come from? What are their stories?</p>
            </div>
          </div>


          {getYourCharacter.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      {/* <div id="chapter2" className="py-20 bg-gradient-to-b from-gray-700 to-gray-600">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3">
              <span className="uppercase sm:text-2xl">Chapter 3</span>
              <h1 className="mt-4 text-center">Fun & Games</h1>
              <p className="sm:text-2xl">Who carried these Loot bags? Where did they come from? What can you do with these treasures? Your adventure begins now.</p>
            </div>
          </div>


          {whatToDo.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div> */}
      <div id="chapter3" className="py-20 text-black bg-white ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 text-center rounded">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 3</span>
              <h1 className="mt-4 text-center">Go on Quests</h1>
            </div>
          </div>
          <div className="px-4 mx-auto my-4 text-center sm:text-2xl sm:w-2/3 ">
            <p className="my-4">Your journey continues soon.</p>
            <br />
            <a
              target="_blank"
              href="https://a.quest"
              className="w-full px-5 py-2 my-1 text-lg text-center text-gray-200 bg-gray-800 border border-gray-700 hover:bg-gray-600 rounded-xl"
            >
              Coming soon
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
