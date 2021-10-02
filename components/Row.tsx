import type { ReactElement } from "react";

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function CardRow(props: any){
    return (
        <div className="my-8">
          <h2>{props.name}</h2>
          <p className="sm:text-3xl mb-4">{props.description}</p>
          {/* <div className="flex sm:space-x-4 flex-wrap">
            {props.project.map(({name, description, whatToDo, roadMap, website, contract}, i) => {                      
             return (
             <div key={i} className="bg-black rounded-xl p-5 sm:p-8 w-full md:w-1/4 sm:w-1/2 shadow-xl my-3 mx-3 ">
               <div className="flex text-white justify-between">
                <h2 className="mr-auto">{name}</h2>
                <a className="self-center " href="">
                  <Discord className="fill-current w-8 h-8 mx-2"/>
                </a>
                <a className="self-center" href="">
                  <Twitter className="fill-current w-6 h-6 mx-2"/>
                </a>
                
               </div>
                  
                  <h5 className="uppercase mt-8 text-gray-600 ">About</h5>
                  <p className="text-xl">{description}</p>
                  <h5 className="uppercase mt-8 text-gray-600">What you Get</h5>
                  <div className="flex">
                    <div className="py-2 border-gray-600 border rounded px-4 my-4">

                      {whatToDo}
                    </div>
                  </div>

                  <h5 className="uppercase mt-8 text-gray-600">Where is it going</h5>
                  <p className="text-xl">{description}</p>
                  <div className="flex mt-5 space-x-4">
                    <button className="border-gray-600 rounded border px-2 py-1">Website</button>
                    <button className="border-gray-600 rounded border px-2 py-1">Contract</button>
                  </div>
                  
                </div>)
            })}
           </div> */}
        </div>
      );
  }
  