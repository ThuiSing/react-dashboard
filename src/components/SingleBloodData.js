import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";

const SingleBloodData = ({ data }) => {
  const { type, APlus, AMinus, BPlus, BMinus, ABPlus, ABMinus, OPlus, OMinus } =
    data;
  const total =
    data?.APlus +
    data?.AMinus +
    data?.BPlus +
    data?.BMinus +
    data?.ABPlus +
    data?.ABMinus +
    data?.OPlus +
    data?.OMinus;

  const SecBgColor = (type) => {
    if (type === "Requested") {
      return "bg-blue-400 text-white ";
    }
    if (type === "Received") {
      return "bg-pink-400  text-white";
    }
    if (type === "In Stock") {
      return "bg-green-400 text-white";
    }
  };
  const BgColor = (type) => {
    if (type === "Requested") {
      return "bg-blue-200";
    }
    if (type === "Received") {
      return "bg-pink-200";
    }
    if (type === "In Stock") {
      return "bg-green-200";
    }
  };
  const TextColor = (type) => {
    if (type === "Requested") {
      return "text-blue-800 ";
    }
    if (type === "Received") {
      return "text-pink-800";
    }
    if (type === "In Stock") {
      return "text-green-800";
    }
  };
  return (
    <div
      className={`rounded-3xl ${BgColor(type)} ${TextColor(
        type
      )} pl-4 py-4 drop-shadow-md`}
    >
      <div>
        <h3 className={`font-medium text-2xl `}>{type}</h3>
      </div>
      <div className="flex items-center overflow-hidden mt-6">
        <div className="w-2/5">
          <span className="font-medium">TOTAL</span>
          <h3 className="font-semibold text-5xl mt-1">{total}</h3>
        </div>
        <div className="w-3/5 ml-8">
          <Carousel
            show={2.4}
            slide={3}
            swiping={true}
            infinite={false}
            useArrowKeys={false}
          >
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                A+
              </h4>
              <h5 className="px-2 py-3 ">{APlus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                A-
              </h4>
              <h5 className="px-2 py-3 ">{AMinus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                B+
              </h4>
              <h5 className="px-2 py-3 ">{BPlus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                B-
              </h4>
              <h5 className="px-2 py-3 ">{BMinus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)} p-2 text-xl font-medium `}>
                O+
              </h4>
              <h5 className="px-2 py-3 ">{OPlus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                O-
              </h4>
              <h5 className="px-2 py-3 ">{OMinus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                AB+
              </h4>
              <h5 className="px-2 py-3 ">{ABPlus}</h5>
            </div>
            <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
              <h4 className={` ${SecBgColor(type)}  p-2 text-xl font-medium `}>
                AB-
              </h4>
              <h5 className="px-2 py-3 ">{ABMinus}</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SingleBloodData;
