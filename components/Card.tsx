import { MouseEventHandler } from "react";
import Discord from "../img/discord.svg";
import Twitter from "../img/twitter.svg";
import Home from "../img/home.svg";
import { Project } from "../types/interface";

type CardProps = {
  project: Project;
  selected?: Boolean;
  onClick?: MouseEventHandler;
};

export function Card(props: CardProps) {
  const { selected: isSelected, project, onClick } = props;
  return (
    <div
      className={project.name == "Loot (for Adventurers)" ? "sm:w-1/2 h-full" : "h-full" + "w-full md:w-1/4 mb-10 transition transition-width"}
    >
      <div className="bg-gray-900 rounded-xl shadow-xl my-3 transform hover:-translate-y-2 hover:border-white border border-black duration-150 mx-3 h-full flex flex-col">
        {project.image && (
          <img
            src={project.image as string}
            className=
            "transition delay-300 duration-700 rounded-t-xl object-cover object-top"

          />
        )}
        <div className="p-6 flex flex-col h-full">
          <div className="text-white justify-between">
            {project.heading ? (
              <div className="my-1">
                <h2 className="mr-auto">{project.heading}</h2>
              </div>
            ) : <h2 className="mr-auto">{project.name}</h2>}

          </div>

          <p className="text-2xl text-gray-400">{project.description}</p>
          {project.mintPrice && (
            <div className="my-1">
              <h5 className="uppercase mt-4 text-gray-400">Cost</h5>
              <span className="rounded">
                Cost: {project.mintPrice.mint}ETH + gas{" "}
              </span>
            </div>
          )}
          {project.neededProject && (
            <div className="my-1">
              <h5 className="uppercase mt-4 text-gray-400">Required</h5>
              <span className="rounded">
                {project.neededProject.name}
              </span>
            </div>
          )}

          <div className="my-1">
            <h5 className="uppercase mt-4 text-gray-400">Project</h5>
            <div className="flex justify-between">
              <span className="self-center text-xl">
                {project.name}
              </span>
              <div className="flex mt-auto py-2">
                {project.website && (
                  <a
                    target="_blank"
                    href={project.website.url as string}
                    className="self-center "
                  >
                    <Home className="w-6 h-6 mx-2" />
                  </a>
                )}
                {project?.discord && (
                  <a
                    target="_blank"
                    className="self-center "
                    href={project.discord.url as string}
                  >
                    <Discord className="fill-current w-6 h-6 mx-2" />
                  </a>
                )}
                {project.twitter && (
                  <a
                    href={project.twitter.url as string}
                    className="self-center"
                    target="_blank"
                  >
                    <Twitter className="fill-current w-4 h-4 mx-2" />
                  </a>
                )}
              </div>
            </div>

          </div>

          <h5 className="uppercase mt-4 text-gray-400 mb-2">What to do</h5>
          <div className="flex gap-5 rounded">
            <div className={isSelected ? "w-1/3" : ""}>
              <div className="flex flex-wrap gap-x-3">
                {project.whatToDo.map(({ content, url }, i) => {
                  return (
                    <a
                      target="_blank"
                      href={url as string}
                      key={i}
                      className="bg-gray-800 hover:bg-gray-600 py-2 border-gray-600 border rounded px-4 my-1"
                    >
                      {content}
                    </a>
                  );
                })}

              </div>
            </div>
            <div>
              {project.image && (
                <img
                  src={project.image as string}
                  className={
                    isSelected ? "transition delay-300 duration-700 mb-4" : "w-0"
                  }
                  style={{
                    transform: isSelected ? "rotateY(0deg)" : "rotateY(90deg)"
                  }}
                  width="300px"
                />
              )}
            </div>
          </div>


          {/* {project.roadMap && (
          <div>
            <h5 className="uppercase mt-8 text-gray-400">Where is it going</h5>
            <p className="text-xl">{project.roadMap}</p>
          </div>
        )} */}

          <div className="flex space-x-4 text-center mt-auto">

            {project.contract && (
              <a
                target="_blank"
                href={
                  ("https://etherscan.io/address/" +
                    project.contract.content) as string
                }
                className="underline  hover:text-gray-500 uppercase"
              >
                View Contract
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
