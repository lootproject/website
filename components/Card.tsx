
import Discord from "../img/discord.svg"
import Twitter from "../img/twitter.svg"
import { Project } from "../types/interface"
export function Card(props: Project) {
  return (
    <div className={props.name === 'Loot (for Adventurers)' ? "w-full md:w-1/2" : "w-full md:w-1/4 sm:w-1/2 mb-10"}>
      <div className="bg-gray-900 rounded-xl p-5 sm:p-8 shadow-xl my-3 transform hover:-translate-y-2 hover:border-white border border-black duration-150 mx-3 h-full flex flex-col">
        <div className="flex text-white justify-between">
          <h2 className="mr-auto">{props.name}</h2>

        </div>

        <p className="text-xl">{props.description}</p>

        <h5 className="uppercase mt-8 text-gray-400 mb-2">What to do</h5>
        <div className="flex flex-wrap">
          {props.whatToDo.map(({ content, url }, i) => {
            return (
              <a target="_blank" href={url as string} key={i} className="bg-gray-800 hover:bg-gray-600 py-2 border-gray-600 border rounded px-4 mr-3 mb-2">
                {content}
              </a>
            )
          })}

        </div>
        {props.neededProject &&
          <div className="my-2">
            <span className="border border-gray-700 p-2 rounded">Required:  {props.neededProject.name}</span>
          </div>
        }
        {props.mintPrice &&
          <div className="my-2">
            <span className="border-gray-700 border p-2 rounded">Cost: {props.mintPrice.mint}ETH + gas </span>
          </div>
        }


        {props.roadMap &&
          <div>
            <h5 className="uppercase mt-8 text-gray-400">Where is it going</h5>
            <p className="text-xl">{props.roadMap}</p>
          </div>

        }
        <div className="flex mt-auto py-2">
          {props?.discord &&
            <a target="_blank" className="self-center " href={props.discord.url as string}>
              <Discord className="fill-current w-6 h-6 mx-2" />
            </a>

          }
          {props.twitter &&
            <a href={props.twitter.url as string} className="self-center" target="_blank">
              <Twitter className="fill-current w-4 h-4 mx-2" />
            </a>
          }
        </div>
        <div className="flex space-x-4 text-center">
          {props.website &&
            <a target="_blank" href={props.website.url as string} className="border-gray-600 rounded border px-2 py-1 w-full  hover:bg-gray-800 uppercase">Website</a>
          }
          {props.contract &&
            <a target="_blank" href={'https://etherscan.io/address/' + props.contract.content as string} className="border-gray-600 rounded border px-2 py-1 w-full  hover:bg-gray-800 uppercase">Contract</a>
          }
        </div>
      </div>
    </div >
  );
}
