import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error getting orders data</div>;

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">User Dashboard</h1>
                <p className="text-gray-700 mb-6">
                    Welcome, <span className="font-semibold">{currentUser?.name || 'User'}</span>! Here are your recent orders:
                </p>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Orders</h2>
                    {orders.length > 0 ? (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li key={order._id} className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                                    <p className="font-medium text-gray-800">Order ID: {order._id}</p>
                                    <p className="text-gray-600">Date: {new Date(order?.createdAt).toLocaleDateString()}</p>
                                    <p className="text-gray-600">Total: ${order.totalPrice}</p>
                                    <div className="mt-2 space-y-1">
                                        {order.productIds.map((productId) => (
                                            <p key={productId} className="ml-1 text-sm text-gray-700">• {productId}</p>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">You have no recent orders.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
