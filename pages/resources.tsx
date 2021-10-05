// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { resources } from "../utils/newLists"
// Types
import type { ReactElement } from "react";

export default function Resources(): ReactElement {
  return (
    <Layout>
      <div className="bg-black py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around -mt-40">
            <div className="bg-gray-900 px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl border border-gray-800">
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
    </Layout>


  )
}