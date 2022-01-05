import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleVolunteer from "./SingleVolunteer";

const Home = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    fetch("/ourVoluneteer.json")
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="relative">
      <h2>Hello from Dashboard</h2>
      <Link to="/dashboard">Dashboard</Link>
      {/* oru donors list  */}
      <div className="grid grid-cols-3 gap-6">
        {volunteers.map((volunteer, key) => (
          <SingleVolunteer key={key} volunteer={volunteer} />
        ))}
      </div>
    </div>
  );
};

export default Home;
