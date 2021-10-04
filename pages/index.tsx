// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { whatToGet, whatToDo } from "../utils/newLists"
import { Project } from "../types/interface"

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {


  return (
    <Layout>
      <div className="bg-black py-10 pb-40">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around -mt-40">
            <div className="bg-gray-900 px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl border border-gray-800">
              <span className="uppercase sm:text-xl ">The Quest begins here</span>
              <h1 className="text-center mt-4">Chapter 1: Finding the Bags</h1>
              <p className="sm:text-2xl">8,000 Bags full of Loot, discovered by Adventurers. Where did they come from? What stories do they hold? Collect a bag, learn its story, and begin your adventure. </p>
            </div>
          </div>
          {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div className="bg-gray-700 py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around -mt-40">
            <div className="bg-gray-800 px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl border border-gray-700">
              <span className="uppercase text-2xl">Chapter 2</span>
              <h1 className="text-center mt-4">The Adventures Begin</h1>
              <p className="text-2xl">8000 Bags were discovered which unleashed the creativity of thousands. </p>
            </div>
          </div>


          {whatToDo.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around -mt-40">
            <div className="bg-gray-800 px-20 py-8 rounded text-center">
              <span className="uppercase text-2xl font-semibold">Chapter 3</span>
              <h1 className="text-center mt-4">A Quest for Adventurers</h1>
              <p className="text-2xl">Soon to come.</p>
            </div>
          </div>
          <div className="text-black text-center text-2xl my-4">
            How did we let it come to this? Sitting on thrones of aging treasure, weaving tales of journeys past and beasts slain.

            A storm is brewing and it intends to swallow us whole. Can you feel it in the wind?

            This world needs us once more. Will you join and fight for it? Or will you watch from afar, singing past travails and flipping for coin?

            From the deepest depths,
            To the highest peaks,
            Forgotten friends and spoils reaped,
          </div>
        </div>
      </div>
    </Layout>
  );
}
