import { MouseEventHandler } from "react";
import { ReactElement, useRef, useState } from "react";
import Link from "next/link"; // Routing

type NavProps = {
    onClick?: MouseEventHandler;
    hidden: boolean;
};

export function MobileNav(props: NavProps) {
    const { hidden, onClick } = props;

    const links = [
        {
            name: "Chapters",
            path: "/"
        },
        {
            name: "Marketplaces",
            path: "/marketplaces"
        },
        {
            name: "Build",
            path: "/build"
        },
        {
            name: "Resources",
            path: "/resources",
        },
        { name: "FAQ", path: "/faq" },
        { name: "Forum", path: "https://loot-talk.com/" },
    ];

    const open = "ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll -translate-x-full"
    const closed = "ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll translate-x-0"

    return (
        <div className={hidden ? closed : open}
        >
            <div className="ml-auto m-2">
                <button onClick={onClick} >close</button>
            </div>
            <div className="w-full">
                <div className="self-center">
                    <ul className="flex flex-col space-y-8">
                        {links.map(({ name, path }, i) => {
                            // For each link, render link
                            return (
                                <li className="self-center text-xl" key={i}>
                                    <Link href={path}>
                                        <a
                                            onClick={onClick}
                                        >
                                            {name}
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}