"use client";
import React, { useEffect, useState } from "react";
import { useFilter } from "../context/FilterContext";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
//------------------------------------------------------
const TourList = () => {
  const [data, setData] = useState(null);

  const { filteredData } = useFilter();

  const data2 = filteredData.Tours


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/tours');
        const data = await res.json();
        console.log('API Response:', data);  // API'den gelen veriyi logluyoruz
        setData(data.tours || []);  // Veriyi set etmeden önce kontrol ediyoruz
      } catch (error) {
        console.error("Error fetching data:", error);  // Hata varsa logluyoruz
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;  // Veri yüklenene kadar loading gösterebiliriz.
  }

  // Filtrelenmiş veri varsa onu kullan, yoksa normal veriyi kullan
  const toursToDisplay = data2?.length > 0 ? data2 : data;

  return (
    <div className="p-8 max-w-7xl mx-auto" id="Tours">
      <h2 className="text-3xl font-semibold text-center text-primary-500 mb-6">Available Tours</h2>
      {toursToDisplay.length > 0 ? (
        <div className="flex flex-wrap  gap-6 justify-center items-center">

          {toursToDisplay.map((tour, index) => (
            <div key={index} className="bg-white w-[95%] md:w-[30vw] rounded-lg shadow-sm shadow-[#F2A945] transform hover:scale-105 transition-transform duration-300">
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-4">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <p className="text-lg font-semibold text-primary-500">{tour.price} USD</p>
                <div className="flex justify-start items-center">
                  <IoCalendarOutline className="w-5 h-5" />
                  <p>{tour.startDate}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <IoMdStar />
                    {tour.rating}

                  </div>
                  <button className="bg-[#F2A945] text-white py-2 px-6 rounded-lg text-sm font-semibold hover:bg-primary-400 transition duration-300">
                    Book Now
                  </button>
                </div>
                <div className="flex items-center space-x-2 text-primary-500 text-sm mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v18m9-9H3" />
                  </svg>
                  <p>{tour.location}</p>
                </div>
                <p className="text-center mt-2 text-[#F2A945] cursor-pointer hover:text-primary-400">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No tours available</p>
      )}
    </div>
  );
};

export default TourList;
