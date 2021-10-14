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
import {
    resourceList,
} from "@utils/lists";
export default function Build(): ReactElement {
    const resourcesIndex = [
        {
            title: "All Developer Tooling",
            description: "Aggregated resources built by the Loot community:",
            list: resourceList,
        },
    ];
    return (
        <Layout>
            <div className="bg-black py-20">
                <div className="container mx-auto mt-8">
                    <div className="flex justify-around">
                        <div className="px-4 sm:px-20 py-8 rounded-2xl text-center md:w-2/3 shadow-xl ">
                            <span className="uppercase text-xl tracking-widest text-gray-700">Build</span>
                            <h1 className="text-center mt-4 capitalize">Featured Resources for Builders</h1>
                            <div className="flex justify-around py-4">
                                <a className="text-2xl flex bg-gray-900 rounded p-4 hover:bg-gray-700" href=" https://discord.gg/vEvmv34NPK"><Discord className="fill-current w-6 h-6 mx-2 mr-4  self-center" />Join Loot Builders Discord</a>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-wrap px-4 justify-center">
                        <div className="sm:w-1/2">
                            <h2>Loot Contracts</h2>
                            <div className="text-2xl flex flex-col mb-6 text-gray-400 underline">
                                <a href="https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7">Loot contract</a>
                                <a href="https://etherscan.io/address/0x869ad3dfb0f9acb9094ba85228008981be6dbdde">mLoot contract</a>
                                <a href="https://etherscan.io/address/0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF">sLoot contract</a>
                                <a href="https://etherscan.io/address/0x8db687aceb92c66f013e1d614137238cc698fedb">gLoot contract</a>
                                <a href="https://etherscan.io/address/0x3eb43b1545a360d1D065CB7539339363dFD445F3#code">Loot Components</a>
                            </div>
                            <h2>L2 & Sidechain Information</h2>
                            <p className="text-xl text-gray-400">Due to gas and congestion issues on mainnet, there is ongoing discussion to coordinate on how to best move Loot to L2s, sidechains, and other similar approaches.</p>
                            <p className="text-xl text-gray-400">If you are interested in participating, please join #l2 on the Builders Discord.</p>
                            <h2 className="mt-4">Expansion packs / modules</h2>
                            <p className="text-xl text-gray-400">In order to approve discoverability and reduce gas costs for the community member, there is an initiative to create an "expansion pack" format that would allow new modules to be deployed and automatically associated with Loot. </p>
                            <p className="text-xl text-gray-400">If you are interested in participating, please head to the Builder's Discord and join #gas-free-expansions.</p>
                        </div>

                    </div>
                    {build.map(({ name, description, project }, i) => {
                        return (
                            <CardRow key={i} name={name} description={description} project={project} />
                        );
                    })}
                </div>
            </div>
            <div className="container mx-auto my-10 flex justify-around">
                <div className="sm:w-1/2 p-3">        {resourcesIndex.map(({ title, description, list }, i) => {
                    return (
                        <div className="my-10" key={i} >
                            <h2>{title}</h2>
                            <p className="text-2xl mb-6">{description}</p>
                            <ul className="text-lg">
                                {list.map(({ name, description, url }, i) => {
                                    // For each resource, render link and description
                                    return (
                                        <li key={i}>
                                            <p className="my-3 text-xl">
                                                <a className="font-semibold hover:underline" href={url} target="_blank" rel="noopener noreferrer">
                                                    {name}
                                                </a>
                         — {description}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}</div>

            </div>
        </Layout >

    )
}