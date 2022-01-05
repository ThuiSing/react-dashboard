import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AddToRequested } from "../Redux/Slices/BloodSlices";

const SingleVolunteer = ({ volunteer }) => {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    data.requestedTo = volunteer;
    data.type = "Requested";
    dispatch(AddToRequested(data));
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <div className="border flex items-center border-2 border-gray p-3 rounded-md shadow-md">
      <div className="w-1/3">
        <img className="rounded-full" src={volunteer?.img} alt="" />
      </div>
      <div className="w-2/3 ml-8 space-y-1">
        <h3 className="text-xl font-medium">Name : {volunteer.name}</h3>
        <h4> email: {volunteer.email}</h4>
        <h5>Address: {volunteer.address} </h5>
        <h5>Blood Group: {volunteer.bloodGroup} </h5>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-300 px-3 py-1 rounded-xl"
        >
          Request for Blood
        </button>
        <a
          href={`tel:${volunteer.number}`}
          className="bg-blue-300 px-3 py-1 rounded-xl ml-2"
        >
          Call me
        </a>
      </div>
      {/* Modal */}
      <div
        className={` bg-gray-200 absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center ${
          showModal
            ? "visible opacity-100 w-screen h-screen"
            : "invisible opacity-0 w-0 h-0"
        } transition-all`}
      >
        <div className="bg-white p-5 w-2/5">
          <h4>Enter Your Information</h4>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              className=" w-full p-3 outline-none border border-1 rounded-md"
              {...register("name")}
              placeholder="Name"
            />
            <input
              className=" w-full p-3 outline-none border border-1 rounded-md"
              {...register("email")}
              placeholder="Email"
            />
            <input
              className=" w-full p-3 outline-none border border-1 rounded-md"
              defaultValue={volunteer.bloodGroup}
              {...register("bloodGroup")}
              placeholder="Blood Group"
            />
            <input
              type="date"
              className=" w-full p-3 outline-none border border-1 rounded-md"
              {...register("date")}
              placeholder="Date"
            />
            <button className="bg-gray-300 px-3 py-2" type="submit">
              Submit
            </button>

            <span
              onClick={handleCancel}
              className="bg-gray-300 px-3 py-2 ml-3 cursor-pointer	 "
            >
              Cancel
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleVolunteer;

// {errors.exampleRequired && <span>This field is required</span>}
