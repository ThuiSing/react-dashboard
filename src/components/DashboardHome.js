import { Carousel } from "@trendyol-js/react-carousel";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecentDonors from "./RecentDonors";
import SingleBloodData from "./SingleBloodData";

const DashboardHome = () => {
  const [BloodData, setBloodData] = useState([]);

  useEffect(() => {
    const url = "/bloodData.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBloodData(data));
  }, []);
  const { requested, inStock, received } = useSelector(
    (state) => state.bloodDonations
  );
  const countTotal = (type, bloodGroup) => {
    return type.filter((data) => data.bloodGroup === bloodGroup).length;
  };
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-x-8 my-10">
        <div
          className={`rounded-3xl bg-blue-200 text-blue-900 pl-4 py-4 drop-shadow-md`}
        >
          <div>
            <h3 className={`font-medium text-2xl `}>Requested</h3>
          </div>
          <div className="flex items-center overflow-hidden mt-6">
            <div className="w-2/5">
              <span className="font-medium">TOTAL</span>
              <h3 className="font-semibold text-5xl mt-1">
                {requested.length}
              </h3>
            </div>
            <div className="w-3/5 ml-8">
              <Carousel
                show={2.4}
                slide={3}
                swiping={true}
                infinite={false}
                useArrowKeys={false}
              >
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center ">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white`}
                  >
                    A+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "A+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    A-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "A-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "B+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "B-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    O+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "O+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    O-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "O-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    AB+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "AB+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-blue-300 text-white `}
                  >
                    AB-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(requested, "AB-")}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div
          className={`rounded-3xl bg-pink-200 text-pink-900 pl-4 py-4 drop-shadow-md`}
        >
          <div>
            <h3 className={`font-medium text-2xl `}>Received</h3>
          </div>
          <div className="flex items-center overflow-hidden mt-6">
            <div className="w-2/5">
              <span className="font-medium">TOTAL</span>
              <h3 className="font-semibold text-5xl mt-1">{received.length}</h3>
            </div>
            <div className="w-3/5 ml-8">
              <Carousel
                show={2.4}
                slide={3}
                swiping={true}
                infinite={false}
                useArrowKeys={false}
              >
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center ">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white`}
                  >
                    A+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "A+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    A-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "A-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "B+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "B-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    O+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "O+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    O-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "O-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    AB+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "AB+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-pink-300 text-white `}
                  >
                    AB-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(received, "AB-")}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div
          className={`rounded-3xl bg-green-200 text-green-900 pl-4 py-4 drop-shadow-md`}
        >
          <div>
            <h3 className={`font-medium text-2xl `}>In Stock</h3>
          </div>
          <div className="flex items-center overflow-hidden mt-6">
            <div className="w-2/5">
              <span className="font-medium">TOTAL</span>
              <h3 className="font-semibold text-5xl mt-1">{inStock.length}</h3>
            </div>
            <div className="w-3/5 ml-8">
              <Carousel
                show={2.4}
                slide={3}
                swiping={true}
                infinite={false}
                useArrowKeys={false}
              >
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center ">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white`}
                  >
                    A+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "A+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    A-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "A-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "B+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    B+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "B-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    O+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "O+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    O-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "O-")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    AB+
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "AB+")}</h5>
                </div>
                <div className="bg-white rounded-xl overflow-hidden w-12 text-center">
                  <h4
                    className={`p-2 text-xl font-medium bg-green-300 text-white `}
                  >
                    AB-
                  </h4>
                  <h5 className="px-2 py-3 ">{countTotal(inStock, "AB-")}</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <RecentDonors showAll={false} />
    </div>
  );
};

export default DashboardHome;
