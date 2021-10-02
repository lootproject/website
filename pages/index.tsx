// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { whatToGet, whatToDo } from "../utils/newLists"


// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {


  return (
    <Layout>
      <div className="container mx-auto px-4 text-center py-40 justify-around flex flex-wrap">
        <div className="sm:w-1/2">
          <h1>Loot</h1>
          <p className="text-2xl">Loot is randomized adventurer gear generated and stored on chain.
          Stats, images, and other functionality are intentionally omitted for others to interpret.
Feel free to use Loot in any way you want.</p>
        </div>
        <div className="flex w-full justify-around mt-8">
          <div className="flex text-2xl">
            <button className="bg-black mx-4 p-4">Marketplaces</button>
            <button className="bg-black mx-4 p-4">Communities</button>
            <button className="bg-black mx-4 p-4">Resources</button>
            <button className="bg-black mx-4 p-4">Guilds</button>
          </div>
        </div>

      </div>
      <div>
        <div className="bg-black py-20">
          <div className="container mx-auto mt-8">
            <div className="flex justify-around -mt-40">
              <div className="bg-gray-800 px-20 py-8 rounded text-center">
                <span className="uppercase text-xl font-semibold">The Quest begins here</span>
                <h1 className="text-center mt-4">Chapter 1: Finding the Bags</h1>
                <p className="text-2xl">8000 Bags were discovered which unleashed the creativity of thousands. </p>
              </div>
            </div>


            {whatToGet.map(({ name, description, project }, i) => {
              return (
                <CardRow key={i} name={name} description={description} project={project} />
              );
            })}
          </div>
        </div>
        <div className="bg-black py-20">


        </div>
      </div>
    </Layout>
  );
}
