import React from 'react'

function Transactions() {
  return (
    <div class="bg-white dark:bg-black shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Latest Transactions</h3>
                           <span class="text-base font-normal text-gray-900 dark:text-white">This is a list of latest transactions</span>
                        </div>
                        <div class="flex-shrink-0">
                           <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                 <table class="min-w-full divide-y divide-gray-200 dark:border-2 dark:border-blue">
                                    <thead class="bg-gray-50 dark:bg-blue">
                                       <tr>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                                             Transaction
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                                             Date & Time
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                                             Amount
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white dark:bg-black">
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" timestamp="Apr 23 ,2021" amount="$670" />
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
  )
}

const Transaction = ({preText, toAddress, timestamp, amount}) => {
  return (
    <tr class="bg-gray-50 dark:bg-black">
      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 dark:text-white rounded-lg rounded-left">
        {preText} <span class="font-semibold">#{toAddress}</span>
      </td>
      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 dark:text-white">
        {timestamp}
      </td>
      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
        {amount}
      </td>
    </tr>
  );
};

export default Transactions
