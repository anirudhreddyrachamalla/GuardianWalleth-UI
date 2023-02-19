import React from 'react'
import WeButton from '../WeButton';

function ApproveTransactions() {
  return (
    <div class="mt-4 bg-white dark:bg-black shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Transactions waiting for approval</h3>
                           <span class="text-base font-normal text-gray-900 dark:text-white">This is a list of awaiting transactions</span>
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
                                             Amount
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wider">
                                             Action
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white dark:bg-black">
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    <Transaction preText="Payment refund to " toAddress="00910" handleApprove={() => {}} txId="Apr 23 ,2021" amount="$670" />
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
  )
}

const Transaction = ({preText, toAddress, txId, handleApprove, amount}) => {
  return (
    <tr class="bg-gray-50 dark:bg-black">
      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 dark:text-white rounded-lg rounded-left">
        {preText} <span class="font-semibold">#{toAddress}</span>
      </td>
      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
        {amount}
      </td>
      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900 dark:text-white">
       <WeButton label="Approve" px={3} py={1} fontSize="xs" clickHandler={() => handleApprove(txId)} />
      </td>
    </tr>
  );
};

export default ApproveTransactions
