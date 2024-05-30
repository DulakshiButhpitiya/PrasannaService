import React from 'react'

const ServiceTable = () => {
  return (
    <div><div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-bold mb-4">OUR SERVICE PACKAGES</h2>
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-purple-800 text-white">
          <th className="border border-gray-300 p-2"></th>
          <th className="border border-gray-300 p-2"></th>
          <th colSpan="3" className="border border-gray-300 p-2">Short Service</th>
          <th className="border border-gray-300 p-2">Full Service</th>
        </tr>
        <tr className="bg-purple-700 text-white">
          <th className="border border-gray-300 p-2">SMC Service GUIDE Pricing</th>
          <th className="border border-gray-300 p-2"></th>
          <th className="border border-gray-300 p-2">Bronze Service</th>
          <th className="border border-gray-300 p-2">Silver Service</th>
          <th className="border border-gray-300 p-2">Gold Service</th>
          <th className="border border-gray-300 p-2">Platinum Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Up to 125cc</td>
          <td className="border border-gray-300 p-2">1290.00</td>
          <td className="border border-gray-300 p-2">1130.00</td>
          <td className="border border-gray-300 p-2">1170.00</td>
          <td className="border border-gray-300 p-2">1250.00</td>
          <td className="border border-gray-300 p-2">1400.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">126cc – 599cc</td>
          <td className="border border-gray-300 p-2">1200.00</td>
          <td className="border border-gray-300 p-2">1640.00</td>
          <td className="border border-gray-300 p-2">1680.00</td>
          <td className="border border-gray-300 p-2">2350.00</td>
          <td className="border border-gray-300 p-2">2550.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">600 – 999cc</td>
          <td className="border border-gray-300 p-2">2110.00</td>
          <td className="border border-gray-300 p-2">2150.00</td>
          <td className="border border-gray-300 p-2">2190.00</td>
          <td className="border border-gray-300 p-2">2400.00</td>
          <td className="border border-gray-300 p-2">3600.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">1000cc +</td>
          <td className="border border-gray-300 p-2">3120.00</td>
          <td className="border border-gray-300 p-2">3160.00</td>
          <td className="border border-gray-300 p-2">3200.00</td>
          <td className="border border-gray-300 p-2">3450.00</td>
          <td className="border border-gray-300 p-2">3650.00</td>
        </tr>
        <tr className="bg-purple-700 text-white"><thead> <th className="border border-gray-300 p-2">Validity in Kms from the date of purchase</th> </thead>
        <td className="border border-gray-300 p-2">500-750 </td>
        <td className="border border-gray-300 p-2">500-750 </td>
        <td className="border border-gray-300 p-2">500-750 </td>
        <td className="border border-gray-300 p-2">500-750 </td>
        <td className="border border-gray-300 p-2">500-750 </td></tr>

        <tr className="bg-purple-700 text-white"><thead> <th className="border border-gray-300 p-2">Validity in Days from the date of previous service</th> </thead>
        <td className="border border-gray-300 p-2">60 </td>
        <td className="border border-gray-300 p-2">100 </td>
        <td className="border border-gray-300 p-2">100 </td>
        <td className="border border-gray-300 p-2">100 </td>
        <td className="border border-gray-300 p-2">100 </td></tr>
     
      </tbody>
    </table>
    <p><br/>*You should avail these services within the above mentioned stipulated conditions of time period or km range, whichever condition gets satisfied earlier. After the above schedule, services needs to be availed after every 3000 kms or 90 days from the previous service, whichever is earlier.</p>
    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Important Notes About Pricing</h3>
      <p className="text-gray-700">
        Due to the huge range, variation and complexity of all of the different bikes available, and parts required (including recent price rises globally), we are unable to give specific service plans or prices for individual bikes here on the website. If you wish to discuss your individual requirements then please give us a call on <a href="tel:033 75 70277" className="text-blue-500">033 7570277</a>.
      </p>
      <p className="text-gray-700 mt-2">
        Please note that all prices stated are approximate costs.
      </p>
    </div>
  </div></div>
  )
}

export default ServiceTable