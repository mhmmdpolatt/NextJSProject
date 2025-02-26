"use client";
import React, { useEffect, useState } from "react";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { useFilter } from "../context/FilterContext";
////////////////////////////////////////////////

const TicketList = () => {
    const { filteredData } = useFilter();
    const [data, setData] = useState([]); 
    const data2 = filteredData.Tickets

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/tours");
                const data = await res.json();
                // console.log("API Response:", data);
                setData(data.tickets || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); 
    }, []); 

    // Eğer filtrelenmiş veri varsa, sadece 'Tickets' olanları seçiyoruz
    const displayData = data2?.length > 0 ? data2 : data;
    if (displayData.length === 0) {
        return <div className="text-center text-xl text-gray-600">No tickets available.</div>;
    }

    return (
        <div id="Tickets" className="w-full md:max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-primary-600 mb-6 text-center">
                Available Tickets
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {displayData.map((ticket, index) => (
                    <div
                        key={index}
                        className=" bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={ticket.image}
                            alt={ticket.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-primary-600 mb-2">
                                {ticket.title}
                            </h3>
                            <p className="text-gray-600 font-bold text-sm mb-4">{ticket.description}</p>

                            <div className="flex items-center text-gray-900 font-bold text-sm mb-2">
                                <IoCalendarOutline className="w-5 h-5 mr-1" />
                                <span>{ticket.date}</span>
                            </div>

                            <div className="flex items-center text-gray-900 font-bold text-sm mb-4">
                                <IoLocationOutline className="w-5 h-5 mr-1" />
                                <span>{ticket.location}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg font-semibold text-primary-500">
                                    {ticket.price}
                                </p>
                                <button className="bg-[#F2A945] text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-primary-400 transition duration-300">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketList;
