import { SearchHit } from "@elastic/elasticsearch/lib/api/types";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import { AdaHandle, searchHandle } from "~/services/elasticsearch.server";


function ResultTableRow(props: { data: AdaHandle }) {
    return (
        <tr className="border-b dark:border-gray-700">
            <td className="px-6 py-4">
                <span>{props.data.key}</span>
            </td>
            <td className="px-6 py-4 w-96">
                <span>{props.data.value}</span>
            </td>
        </tr>
    )
}

function ResultTable(props: { data: AdaHandle[] }) {
    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400 dark:bg-gray-800">
                <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            AdaHandle
                        </th>
                        <td scope="col" className="px-6 py-3">
                            Address
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(x => <ResultTableRow key={x.key} data={x} />)}
                </tbody>
            </table>
        </div>
    )
}

type ActionData = {
    searchResult: AdaHandle[]
}

export async function action({ request }) {
    const formData = await request.formData();
    const searchValue = formData.get("search-input");

    // Defines a minimal thresshold of charactes before triggering a search
    if (searchValue?.length > 2) {

        // Executes the query
        const searchResult = await searchHandle(searchValue);

        const result = searchResult.hits.hits.map((s: SearchHit<AdaHandle>) => {
            const data: AdaHandle = {
                key: s._source!.key,
                value: s._source!.value,
            }
            return data;
        });

        return { searchResult: result };
    }
    return { searchResult: [] };
}

export default function Index() {
    const submit = useSubmit();

    const actionData = useActionData<ActionData>();

    function handleChange(event: any) {
        submit(event.currentTarget, { replace: true });
    }

    return (
        <div className="w-full h-full">
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
                <div className="mb-6">
                    <Form method="post" onChange={handleChange}>
                        <label htmlFor="search-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Search</label>
                        <input type="text" id="search-input" name="search-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </Form>
                </div>
                <div className="mt-8">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Result</label>
                    {actionData?.searchResult.length ? <ResultTable data={actionData.searchResult} /> : null}
                </div>
            </div>
        </div>
    )
}
