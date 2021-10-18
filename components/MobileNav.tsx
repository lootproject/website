import { MouseEventHandler } from "react";
import Link from "next/link"; // Routing
import { Links } from "../types/interface";
type NavProps = {
    onClick?: MouseEventHandler;
    hidden: boolean;
    links: Array<Links>
};

export function MobileNav(props: NavProps) {
    const { hidden, onClick } = props;

    const open = "ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll -translate-x-full"

    const closed = "ease-in-out transition-all duration-300 transform fixed h-full top-0 z-30 w-full sm:w-1/3 flex flex-wrap left-0 bg-gray-1000 sm:p-8 overflow-y-scroll translate-x-0"

    return (
        <div className={hidden ? closed : open}
        >
            <div className="ml-auto m-2">
                <button className="bg-gray-800 rounded px-2 m-2" onClick={onClick} >close</button>
            </div>
            <div className="w-full">
                <div className="self-center">
                    <ul className="flex flex-col space-y-8">
                        {props.links.map(({ name, path }, i) => {
                            // For each link, render link
                            return (
                                <li className="self-center text-xl" key={i}>
                                    <Link href={path as string}>
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