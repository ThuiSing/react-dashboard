import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentDonors = ({ showAll }) => {
  const [recentDonors, setRecentDonors] = useState([]);
  useEffect(() => {
    fetch("/recentDonors.json")
      .then((res) => res.json())
      .then((data) => setRecentDonors(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Recent Donors</h2>
      {recentDonors.length < 0
        ? ""
        : (showAll ? recentDonors : recentDonors.slice(0, 4)).map(
            (donor, key) => (
              <div
                key={key}
                className="bg-white mt-4 py-4 px-8 h-20 rounded-3xl flex justify-between items-center text-md font-medium text-center shadow-sm"
              >
                <div className="w-1/4">
                  <img
                    className="rounded-full w-14"
                    src={
                      donor.img
                        ? donor.img
                        : "https://media.istockphoto.com/vectors/man-silhouette-profile-picture-vector-id526947869?k=20&m=526947869&s=612x612&w=0&h=j528SMpxB1AOCNs-WUcuQjvNRVuO-0PO1djfq-Rq6dE="
                    }
                    alt={donor.name}
                  />
                </div>
                <h3 className="uppercase w-1/4">{donor.name}</h3>

                <h3 className="w-1/4">{donor.date}</h3>
                <h3 className="w-1/4">{donor.bloodGroup}</h3>
              </div>
            )
          )}
      {showAll || (
        <div className="text-center mt-6">
          <Link to="/dashboard/donors">
            <button className="text-blue-900 font-bold hover:bg-blue-900 hover:text-white px-6 py-2 rounded-xl transition-all ">
              See More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentDonors;
