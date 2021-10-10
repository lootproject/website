// Imports

import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, whatToDo, getAfterLoot, getYourCharacter } from "../utils/newLists"
import Path from "../img/path.svg";
// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {


  return (
    <Layout>
      <div className="flex mx-auto sticky top-0 bg-black w-full justify-center text-xl space-x-6 py-4 z-10">
        <div>
          <a className="hover:text-gray-700" href="#chapter1">Start here</a>
        </div>
        <div>
          <a className="hover:text-gray-700" href="#chapter1">Chapter 1</a>
        </div>
        <div>
          <a className="hover:text-gray-700" href="#chapter2">Chapter 2</a>
        </div>
        <div>
          <a className="hover:text-gray-700" href="#chapter3">Chapter 3</a>
        </div>

      </div>
      <div id="chapter1" className="bg-black  sm:py-20 py-10 pb-40">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl">
              <span className="uppercase sm:text-2xl ">The Quest begins here</span>
              <h1 className="text-center mt-4 capitalize">Chapter 1: Get a Loot Bag</h1>
              <p className="sm:text-2xl">8,000 Bags full of Loot, discovered by Adventurers. Where did they come from? What stories do they hold? Collect a bag, learn its story, and begin your adventure. </p>
            </div>
          </div>
          {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
          <div className=" w-1/2 mx-auto">
            <Path className="mx-2" />
          </div>
          {getAfterLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
          <div className=" w-1/2 mx-auto">
            <Path className="mx-2" />
          </div>
          {getYourCharacter.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className="bg-gray-700 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3">
              <span className="uppercase text-2xl">Chapter 2</span>
              <h1 className="text-center mt-4">The Adventures Begin</h1>
              <p className="text-2xl">Who carried these Loot bags? Where did they come from? What can you do with these treasures? Your adventure begins now.</p>
            </div>
          </div>


          {whatToDo.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter3" className="bg-gray-100 py-20 text-black ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 rounded text-center">
              <span className="uppercase text-2xl">Chapter 3</span>
              <h1 className="text-center mt-4">A Quest for Adventurers</h1>
              <p className="text-2xl italic">"O Adventurer, look at you…"</p>
            </div>
          </div>
          <div className="text-center text-2xl my-4 sm:w-2/3 mx-auto">
            <p className="my-4">How did we let it come to this? Sitting on thrones of aging treasure, weaving tales of journeys past and beasts slain.</p>

            <p className="my-4">A storm is brewing and it intends to swallow us whole. Can you feel it in the wind?</p>
            <p className="my-4">This world needs us once more. Will you join and fight for it? Or will you watch from afar, singing past travails and flipping for coin?</p>

            <p className="my-4">            From the deepest depths, <br></br>
            To the highest peaks, <br></br>
            Forgotten friends and spoils reaped,</p>


          </div>
        </div>
      </div>
    </Layout>
  );
}
