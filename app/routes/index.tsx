import { LoaderFunction } from "@remix-run/node";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { searchHandle } from "~/services/elasticsearch.server";

export const loader: LoaderFunction = async ({ request, params }) => { 
    await searchHandle('test');
    return null;
}

const SearchInput = (props: {val: string, onChange: Dispatch<SetStateAction<string>>}) => {
  const onChange = (e: any,) => {
      props.onChange(e.target.value);
  }
  return (
      <div className="mb-6">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
          <input type="text" id="base-input" value={props.val} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
  )
}

export default function Index() {
  const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (!searchValue) {
          console.log()
            // setItems(props.data);
        } else {
            if (searchValue.length > 2) {
                const lcValue = searchValue.toLowerCase();
                
                // searchHandle(lcValue);
                // const result = props.data.filter(item => item.name.toLowerCase().includes(lcValue) || item.description.toLowerCase().includes(lcValue) || item.ticker.toLowerCase().includes(lcValue))
                // setItems(result);
            }
        }
    }, [searchValue, []])
    
    return (
      <div className="w-screen h-screen bg-gray-800">
        <div className="container max-w-6xl p-16  h-full w-full">
            <header className="mb-3 py-6 w-full flex flex-col justify-between">
                <div className='flex'>
                    <img src="/logo.svg" className="mr-4 h-6" alt="TxPipe Logo" />
                    <h2 className="text-m text-gray-400 font-normal">Starter Kit provided by TxPipe</h2>
                </div>
                
                <h3 className="text-3xl text-gray-200 font-extrabold mt-4">Ada Handle to Address</h3>
                <div className="mt-8 rounded-lg border border-blue-500 bg-blue-600 bg-opacity-10 p-4 text-white mb-4">
                    <h1 className="font-bold">Look for the Address associated to an ADA handle</h1>
                    <h3 className="text-sm text-blue-500 mt-2">This starter kit implements the functionality provided by the Scrolls library for searching the address associated to an ADA handle. Start typing the name of the handle for doing a real-time search in the blockchain.</h3>
                </div>
            </header>
            <SearchInput val={searchValue} onChange={setSearchValue}/>
            <div className="text-white text-xs text-right mb-2">
              {/* {items?.length || 0} {items?.length === 1 ? 'item' : 'items'} */}
            </div>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
                        {/* {items?.map((item, key) => <PoolCard key={key} data={item} />)} */}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
