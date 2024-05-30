import React, { useState } from 'react';

const Invoice = () => {
  const [items, setItems] = useState([
    { id: 1, name: '', quantity: 1, unit: '', rate: 0, discount: 0, amount: 0 },
  ]);

  const handleInputChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value, amount: calculateAmount(item) } : item
      )
    );
  };

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length + 1, name: '', quantity: 1, unit: '', rate: 0, discount: 0, amount: 0 },
    ]);
  };

  const calculateAmount = (item) => {
    const amount = item.quantity * item.rate - item.discount;
    return amount > 0 ? amount : 0;
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tax Invoice</h1>

      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>Bill To:</p>
            <input type="text" placeholder="Name" className="border p-1 w-full mb-2" />
            <input type="text" placeholder="Address" className="border p-1 w-full" />
          </div>
          <div>
            <p>Contact No.:</p>
            <input type="text" placeholder="Contact No." className="border p-1 w-full mb-2" />
            <p>Invoice No.:</p>
            <input type="text" placeholder="Invoice No." className="border p-1 w-full mb-2" />
            <p>Date:</p>
            <input type="date" className="border p-1 w-full" />
          </div>
        </div>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">#</th>
            <th className="py-2 border">Item Name</th>
            <th className="py-2 border">Quantity</th>
            <th className="py-2 border">Unit</th>
            <th className="py-2 border">Rate</th>
            <th className="py-2 border">Discount</th>
            <th className="py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2 border text-center">{item.id}</td>
              <td className="py-2 border text-center">
                <input
                  type="text"
                  className="w-full p-1 border"
                  value={item.name}
                  onChange={(e) => handleInputChange(item.id, 'name', e.target.value)}
                />
              </td>
              <td className="py-2 border text-center">
                <input
                  type="number"
                  className="w-full p-1 border"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(item.id, 'quantity', parseFloat(e.target.value))}
                />
              </td>
              <td className="py-2 border text-center">
                <input
                  type="text"
                  className="w-full p-1 border"
                  value={item.unit}
                  onChange={(e) => handleInputChange(item.id, 'unit', e.target.value)}
                />
              </td>
              <td className="py-2 border text-center">
                <input
                  type="number"
                  className="w-full p-1 border"
                  value={item.rate}
                  onChange={(e) => handleInputChange(item.id, 'rate', parseFloat(e.target.value))}
                />
              </td>
              <td className="py-2 border text-center">
                <input
                  type="number"
                  className="w-full p-1 border"
                  value={item.discount}
                  onChange={(e) => handleInputChange(item.id, 'discount', parseFloat(e.target.value))}
                />
              </td>
              <td className="py-2 border text-center">{calculateAmount(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addItem}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Item
      </button>

      <div className="mt-4 flex justify-between">
        <div>
          <p>Amount in words:</p>
          <textarea className="border p-2 w-full h-24"></textarea>
        </div>
        <div>
          <h2 className="text-xl font-bold">Sub Total:</h2>
          <p className="border-b py-2">Discount: 0</p>
          <p className="border-b py-2">Total: {calculateTotal()}</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">
          Terms & Conditions
        </button>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Vehicle Info</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="MAKE" className="border p-1" />
          <input type="text" placeholder="MODEL" className="border p-1" />
          <input type="text" placeholder="YEAR" className="border p-1" />
          <input type="text" placeholder="COLOR" className="border p-1" />
          <input type="text" placeholder="REG #" className="border p-1" />
          <input type="text" placeholder="MILEAGE" className="border p-1" />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
