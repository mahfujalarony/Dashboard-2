import { recentOrders } from './data';

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800">Recent Orders</h3>
      </div>

      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-3 text-left">Tracking No.</th>
              <th className="px-6 py-3 text-left">Product Name</th>
              <th className="px-6 py-3 text-left">Total Order</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Total Amount</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {recentOrders.map((order, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {order.trackingNo}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {order.productName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {order.totalOrder}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span
                      className={`h-2.5 w-2.5 rounded-full mr-2 ${
                        order.status === 'Approved'
                          ? 'bg-green-500'
                          : order.status === 'Pending'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                    ></span>
                    <span className="text-gray-800 font-medium">
                      {order.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-gray-900">
                  {order.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
