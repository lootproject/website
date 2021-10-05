// Imports
import Image from 'next/image'
import Link from "next/link"; // Local routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import { build } from "../utils/newLists"
import Discord from "../img/discord.svg"
// Types
import type { ReactElement } from "react";

export default function Build(): ReactElement {
    return (
        <Layout>
            <div className="bg-black py-20">
                <div className="container mx-auto mt-8">
                    <div className="flex justify-around">
                        <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl ">
                            <span className="uppercase text-xl">Build</span>
                            <h1 className="text-center mt-4">Developer tools for builders</h1>
                            <div className="flex justify-around py-4">
                                <a className="text-2xl flex bg-gray-900 rounded p-2 hover:bg-gray-700" href=" https://discord.gg/vEvmv34NPK"><Discord className="fill-current w-6 h-6 mx-2 mr-4  self-center" />Join Loot Builders Discord</a>
                            </div>

                        </div>
                    </div>


                    {build.map(({ name, description, project }, i) => {
                        return (
                            <CardRow key={i} name={name} description={description} project={project} />
                        );
                    })}
                </div>
            </div>
        </Layout >

    )
}