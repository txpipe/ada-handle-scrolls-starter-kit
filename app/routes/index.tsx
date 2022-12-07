import { Form, useActionData, useSubmit } from "@remix-run/react";
import { AdaHandle, searchHandle } from "~/services/redis.server";

function ResultTableRow(props: { data: AdaHandle }) {
  return (
    <tr className="odd:bg-gray-900 even:bg-gray-850 hover:bg-gray-750 transition-all">
      <td className="text-sm px-6 py-3">{props.data.key}</td>
      <td className="text-sm px-6 py-3">{props.data.value}</td>
    </tr>
  );
}

function ResultTable(props: { data: AdaHandle[] }) {
  return (
    <table className="rounded-md overflow-hidden w-full">
      <thead className="border-b border-gray-950">
        <tr>
          <th
            scope="col"
            className="bg-gray-900 py-3 px-6 text-sm text-left text-gray-400 font-normal"
          >
            AdaHandle
          </th>
          <td
            scope="col"
            className="bg-gray-900 py-3 px-6 text-sm text-left text-gray-400 font-normal"
          >
            Address
          </td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((x) => (
          <ResultTableRow key={x.key} data={x} />
        ))}
      </tbody>
    </table>
  );
}

type ActionData = {
  searchResult: AdaHandle[];
};

export async function action({ request }) {
  const formData = await request.formData();
  const searchValue = formData.get("search-input");

  // Defines a minimal thresshold of charactes before triggering a search
  if (searchValue?.length > 2) {
    // Executes the query
    const searchResult = await searchHandle(searchValue);

    return { searchResult };
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
    <div className="bg-gray-950 w-full h-full">
      <div className="container max-w-6xl p-16 text-white">
        <header>
          <div className="flex">
            <img src="/logo.svg" className="mr-4 w-5 h-5" alt="TxPipe Logo" />
            <p className="text-sm">Starter Kit provided by TxPipe</p>
          </div>

          <h1 className="text-4xl font-light mt-2">Ada Handle to Address</h1>
          <p className="text-gray-400 mt-8">
            Look for the Address associated to an ADA handle.
          </p>
          <div className="rounded-md bg-gray-600 bg-opacity-10 p-6">
            <p>
              This starter kit implements the functionality provided by the
              Scrolls library for searching the address associated to an ADA
              handle. Start typing the name of the handle for doing a real-time
              search in the blockchain.
            </p>
          </div>
        </header>
        <div className="mt-6">
          <Form method="post" onChange={handleChange}>
            <label htmlFor="search-input" className="block mb-2">
              Search
            </label>
            <input
              type="text"
              id="search-input"
              name="search-input"
              className="block px-6 h-12 w-full rounded-md text-base bg-gray-800 placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:ring-1 focus-visible:outline-0"
            />
          </Form>
        </div>
        <div className="mt-8">
          <label htmlFor="base-input" className="block mb-2">
            Result
          </label>
          {actionData?.searchResult?.length ? (
            <ResultTable data={actionData.searchResult} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
