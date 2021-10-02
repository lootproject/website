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

export default function Communities(): ReactElement {
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="w-1/2">
                    <div className="bg-gray-700 p-8 mx-4 rounded">
                        <h2>Loot Talk</h2>
                    </div>
                </div>
            </div>
        </Layout>

    )
}