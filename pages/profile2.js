import Header from "./Header";
import { useState } from "react";



export default function Profile1() {
    const [numFields, setNumFields] = useState(1);

    const handleClick = (e) => {
      e.preventDefault();
      setNumFields(numFields + 1);
    };

  const [people, setPeople] = useState([
    { id: 1, name: "Guradian 1" },
    { id: 2, name: "Guardian 2" },
    { id: 3, name: "Guardian 3" }
  ]);
  
  
    const [newPersonName, setNewPersonName] = useState("");
  
    const handleAddPerson = (e) => {
      e.preventDefault();
      const newPerson = {
        id: Date.now(),
        name: newPersonName
      };
  
      setPeople(prevPeople => [...prevPeople, newPerson]);
      setNewPersonName("");
    };
    return (
      <>
      <Header/>
      <div className="mt-10 sm:mt-0 p-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Guardians Information</h3>
                <p className="mt-1 text-sm text-gray-600">Add Details of Guardians to your Wallet!</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white dark:bg-blue-gray px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6 ">
                      
  
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
  Nick Name
</label>
<input
  type="text"
  name="first-name"
  id="first-name"
  autoComplete="given-name"
  className="mt-2 mb-1 block w-full rounded-md border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue"
/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
  Wallet address
</label>
<input
  type="text"
  name="first-name"
  id="first-name"
  autoComplete="given-name"
  className="mt-2 mb-1 block w-full rounded-md border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue"
/>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 dark:text-white">
                          No of Guardians
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 mb-1 block w-full rounded-md border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue"
                        >
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
            <div className="col-span-6 sm:col-span-4">  
            <div className="flex flex-col items-left space-y-6">
      <h3 className="block text-sm font-medium text-gray-700 dark:text-white mt-4">Guardian Details</h3>
      {[...Array(numFields)].map((value, index) => (
        <>
      <div key={index} className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      <div className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      <div className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      </>
      ))}
      <button onClick={handleClick}>
      <div className="ml-144 w-10 h-10 rounded-full border-2 border-gray-500 dark:border-blue flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    </button>
    </div>
</div>

                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-black px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-0 p-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Approvers Information</h3>
                <p className="mt-1 text-sm text-gray-600">Add Details of Approvers to your Wallet!</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white dark:bg-blue-gray px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6 ">
                                    
                      
            <div className="col-span-6 sm:col-span-4">  
            <div className="flex flex-col items-left space-y-6">
      <h3 className="block text-sm font-medium text-gray-700 dark:text-white mt-4">Approver Details</h3>
      {[...Array(numFields)].map((value, index) => (
        <>
      <div key={index} className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      <div className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      <div className="flex rounded-md">
        <input
          type="text"
          placeholder="Nick Name"
          className="py-2 px-4 rounded-l-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <input
          type="text"
          placeholder="Wallet Address"
          className="py-2 px-4 rounded-r-md block w-full border-gray-700 border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-blue-gray focus:outline-none focus:shadow-outline-blue focus:border-blue"
        />
        <button className="bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md ml-4 focus:outline-none focus:ring-2 focus:ring-blue-600">Add</button>
      </div>
      </>
      ))}
      <button onClick={handleClick}>
      <div className="ml-144 w-10 h-10 rounded-full border-2 border-gray-500 dark:border-blue flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    </button>
    </div>
</div>

                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-black px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
  
      
      </>
    )
  }
  