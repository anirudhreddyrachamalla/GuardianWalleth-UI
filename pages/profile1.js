import { useState } from "react";



export default function Profile1() {
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
    <div className="mt-10 sm:mt-0 p-10">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white dark:bg-gray-700 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6 ">
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
  First name
</label>
<input
  type="text"
  name="first-name"
  id="first-name"
  autoComplete="given-name"
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
  Last Name
</label>
<input
  type="text"
  name="first-name"
  id="first-name"
  autoComplete="given-name"
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-white">
  Email address
</label>
<input
  type="text"
  name="first-name"
  id="first-name"
  autoComplete="given-name"
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12 px-3 py-2 text-gray-700 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
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
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white dark:bg-gray-700 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                        </select>
                      </div>
            <div className="col-span-6 sm:col-span-4">   
              <div className="mt-4">
        <label htmlFor="personName" className="block font-bold mb-2">
          Add Guardian
        </label>
        <div className="flex items-center">
          <input
          placeholder="Enter Wallet Address"
            type="text"
            id="personName"
            value={newPersonName}
            onChange={e => setNewPersonName(e.target.value)}
            className="mb-4 rounded-l-lg p-2 flex-1 appearance-none border border-gray-300 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handleAddPerson}
            className="mb-4 bg-blue hover:bg-green-500 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none focus:shadow-outline"
          >
            Add
          </button>
        </div>
      </div>    
      <div className="grid grid-cols-1 gap-4">
        {people.map(person => (
          <div key={person.id} className="bg-gray-100 dark:bg-black p-4 rounded-lg">
            <p className="font-bold">{person.name}</p>
          </div>
        ))}
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
  