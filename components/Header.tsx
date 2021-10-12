// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import styles from "@styles/components/Layout.module.scss"; // Styles
import React from 'react';
import { useWalletContext } from "hooks/useWalletContext";
import { MouseEventHandler } from "react";
import Menu from "../img/menu.svg";
import { Links } from "../types/interface";

type NavProps = {
    onClick?: MouseEventHandler;
    hidden: boolean;
    links: Array<Links>
};

export function Header(props: NavProps) {
    // Collect current path for active links
    const { pathname } = useRouter();
    const { connectWallet, isConnected, disconnectWallet, displayName } =
        useWalletContext();
    const { onClick } = props;

    // All links

    return (
        <div className="w-full flex justify-between py-2 bg-black px-4 bg-opacity-90">
            {/* Main logo */}
            <div className={styles.header__logo}>
                <Link href="/">
                    <a><h2>Loot</h2></a>
                </Link>
            </div>

            {/* Navigation */}
            <div className="self-center hidden sm:block">
                <ul className="flex space-x-8">
                    {props.links.map(({ name, path }, i) => {
                        // For each link, render link
                        return (
                            <li className="self-center text-xl" key={i}>
                                <Link href={path as string}>
                                    <a
                                        className={
                                            pathname === path
                                                ? // Active class if pathname matches current path
                                                "bg-gray-900 px-4 py-2 rounded"
                                                : undefined + "bg-gray-900 px-4 py-2 rounded"
                                        }
                                    >
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}

                </ul>
            </div>
            <div className="self-center block sm:hidden">
                <button onClick={onClick} ><Menu /></button>
            </div>
            <div className="self-center hidden sm:block">
                <ul className="flex space-x-4 mr-auto">
                    <li className="bg-gray-700 px-4 py-1 rounded  ml-auto">
                        {isConnected && (
                            <span>
                                {displayName} {" "}
                                <a
                                    className={[styles.header__links_active, 'cursor-pointer  font-body'].join(' ')}
                                    onClick={disconnectWallet}
                                >
                                    [ disconnect ]
                  </a>
                            </span>
                        )}
                        {!isConnected && (
                            <button className={[styles.header__button, 'cursor-pointer  font-body'].join(' ')} onClick={connectWallet}>
                                Connect to Lootverse
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>

    );
}