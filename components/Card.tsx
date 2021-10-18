import { MouseEventHandler } from "react";
import Discord from "../img/discord.svg";
import Twitter from "../img/twitter.svg";
import Globe from "../img/globe.svg";
import Github from "../img/github.svg";
import Eth from "../img/mainnet.svg";
import { Project } from "../types/interface";

type CardProps = {
  project: Project;
  selected?: Boolean;
  onClick?: MouseEventHandler;
};

export function Card(props: CardProps) {
  const { selected: isSelected, project } = props;

  const loot = "w-full sm:w-1/2 md:w-1/2 mb-10 "

  const all = "w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-10 "
  return (
    <div
      className={project.name == "Loot (for Adventurers)" ? loot : all}
    >
      <div className="bg-gray-900 rounded-3xl shadow-sm  my-3 transform hover:-translate-y-2 hover:border-gray-600  duration-150 mx-3 h-full flex flex-col">
        {project.image && (
          <div className="sm:h-96">
            <img
              src={project.image as string}
              className=
              "transition delay-300 duration-700 rounded-t-3xl object-cover object-bottom sm:h-96 w-full"

            />
          </div>

        )}
        <div className="p-6 sm:p-8 flex flex-col h-full">
          <div className="text-white justify-between text-3xl sm:text-3xl font-display">
            {project.heading ? (
              <div className="my-1">
                <span className="mr-auto">{project.heading}</span>
              </div>
            ) : <span className="mr-auto">{project.name}</span>}

          </div>

          <p className="text-xl text-gray-400 mb-6 mt-2">{project.description}</p>
          {project.mintPrice && (
            <div className="my-3">
              {/* <h5 className="uppercase mt-4 font-body text-gray-400">Cost</h5> */}
              <span className="text-xl flex">
                {project.mintPrice!.mint! > 0 && <>Cost: {project.mintPrice.mint} <Eth className="w-6 h-6" /> + gas</>}
                {project.mintPrice!.mint! == 0 && <>Cost: Gas</>}
              </span>
            </div>
          )}

          {/* <div className="my-3">
            <div className="flex justify-between">
              <span className="self-center text-xl">
                Project: {project.name}
              </span>
            </div>
          </div> */}

          {/* {project.neededProject && (
            <div className="my-3">
              <span className="text-xl">
                Required: {project.neededProject.name}
              </span>
            </div>
          )} */}


          {project.whatToDo && (
            <div className="flex gap-5 rounded pt-5 mt-auto">
              <div className="flex flex-wrap w-full">
                {project.whatToDo.map(({ content, url, component }, i) => {
                  // if (component) return component;
                  return (
                    <a
                      target="_blank"
                      href={url as string}
                      key={i}
                      className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          )}


          <div className="flex text-center pt-4">

            {project.contract && (
              <a
                target="_blank"
                href={
                  ("https://etherscan.io/address/" +
                    project.contract.content) as string
                }
                className="hover:text-gray-500 uppercase"
              >
                View Contract
              </a>
            )}
            <div className="flex ml-auto">
              {project.github && (
                <a
                  target="_blank"
                  href={project.github.url as string}
                  className="self-center "
                >
                  <Github className="w-5 h-5 mx-2 hover:text-gray-200 text-gray-400 " />
                </a>
              )}
              {project.website && (
                <a
                  target="_blank"
                  href={project.website.url as string}
                  className="self-center "
                >
                  <Globe className="w-5 h-5 mx-2 hover:text-gray-200 text-gray-400 " />
                </a>
              )}
              {project?.discord && (
                <a
                  target="_blank"
                  className="self-center "
                  href={project.discord.url as string}
                >
                  <Discord className="fill-current hover:text-gray-200 text-gray-400 w-6 h-6 mx-2" />
                </a>
              )}
              {project.twitter && (
                <a
                  href={project.twitter.url as string}
                  className="self-center"
                  target="_blank"
                >
                  <Twitter className="fill-current hover:text-gray-200 text-gray-400 w-4 h-4 mx-2" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
