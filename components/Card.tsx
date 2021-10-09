import { MouseEventHandler } from "react";
import Discord from "../img/discord.svg";
import Twitter from "../img/twitter.svg";
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
      className={
        isSelected
          ? "w-full md:w-1/2 transition transition-width cursor-pointer"
          : "w-full md:w-1/4 sm:w-1/2 mb-10 transition transition-width cursor-pointer"
      }
      onClick={onClick}
    >
      <div className="bg-gray-900 rounded-xl p-5 sm:p-8 shadow-xl my-3 transform hover:-translate-y-2 hover:border-white border border-black duration-150 mx-3 h-full flex flex-col">
        <div className="flex text-white justify-between">
          <h2 className="mr-auto">{project.name}</h2>
        </div>

        <p className="text-xl">{project.description}</p>

        <h5 className="uppercase mt-8 text-gray-400 mb-2">What to do</h5>
        <div className="flex gap-5">
          <div className={isSelected ? "w-1/3" : ""}>
            <div className="flex flex-wrap gap-x-3">
              {project.whatToDo.map(({ content, url }, i) => {
                return (
                  <a
                    target="_blank"
                    href={url as string}
                    key={i}
                    className="bg-gray-800 hover:bg-gray-600 py-2 border-gray-600 border rounded px-4 mb-2"
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
        {project.neededProject && (
          <div className="my-2">
            <span className="border border-gray-700 p-2 rounded">
              Required: {project.neededProject.name}
            </span>
          </div>
        )}
        {project.mintPrice && (
          <div className="my-2">
            <span className="border-gray-700 border p-2 rounded">
              Cost: {project.mintPrice.mint}ETH + gas{" "}
            </span>
          </div>
        )}
        {project.roadMap && (
          <div>
            <h5 className="uppercase mt-8 text-gray-400">Where is it going</h5>
            <p className="text-xl">{project.roadMap}</p>
          </div>
        )}
        <div className="flex mt-auto py-2">
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
        <div className="flex space-x-4 text-center">
          {project.website && (
            <a
              target="_blank"
              href={project.website.url as string}
              className="border-gray-600 rounded border px-2 py-1 w-full  hover:bg-gray-800 uppercase"
            >
              Website
            </a>
          )}
          {project.contract && (
            <a
              target="_blank"
              href={
                ("https://etherscan.io/address/" +
                  project.contract.content) as string
              }
              className="border-gray-600 rounded border px-2 py-1 w-full  hover:bg-gray-800 uppercase"
            >
              Contract
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
