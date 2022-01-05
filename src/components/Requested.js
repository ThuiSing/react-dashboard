import React from "react";
import { useSelector } from "react-redux";

const Requested = () => {
  const { requested } = useSelector((state) => state.bloodDonations);
  // console.log(requested);
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-medium mb-5">Requested</h2>

      <table className="table-auto w-full text-left ">
        <thead className="border border-black">
          <tr className="bg-gray-800 text-white h-9">
            <th className="border border-black px-2">Name</th>
            <th className="border border-black px-2">Email</th>
            <th className="border border-black px-2">Requested To</th>
            <th className="border border-black px-2">Date</th>
            <th className="border border-black px-2">status</th>
          </tr>
        </thead>
        <tbody>
          {requested.length === 0 ? (
            <tr>
              <td className="mt-2 font-semibold text-red-600">No data found</td>
            </tr>
          ) : (
            requested.map((data, key) => (
              <tr key={key} className="border border-black h-8">
                <td className="border border-black px-2">{data.name}</td>
                <td className="border border-black px-2">{data.email}</td>
                <td className="border border-black px-2">
                  {data?.requestedTo?.name}
                </td>
                <td className="border border-black px-2">{data?.date}</td>
                <td className="border border-black px-2 text-blue-600 font-semibold">
                  {data?.type}
                </td>
              </tr>
            ))
          )}
          {/* {requested.map((data) => (
            <tr className="border border-black h-8">
              <td className="border border-black px-2">{data.name}</td>
              <td className="border border-black px-2">{data.email}</td>
              <td className="border border-black px-2">
                {data?.requestedTo?.name}
              </td>
              <td className="border border-black px-2">{data?.date}</td>
              <td className="border border-black px-2 text-blue-600 font-semibold">
                {data?.type}
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Requested;
