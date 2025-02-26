"use client";
import React, { useState, useEffect } from "react";
import { useFilter } from "@/app/context/FilterContext";
import Link from "next/link";

const TourFilter = ({ category, menuOpen, setMenuOpen }) => {
  const { setFilteredDataWithCategory, setCategory } = useFilter(); //CONTEXT
  const [dataa, setDataa] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ //FİLTRELEME SEÇENEKLERİ
    Price: 0,
    Location: "",
    Theme: "",
    "Start Date": "",
    "End Date": "",
    "Group Size": "",
    Vehicle: "",
    Activities: [],
    Features: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/tours");
        const data = await res.json();
        setDataa(data.tours || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleFilterChange = (filter, value) => {
    const newFilters = { ...filters };

    if (
      filter === "Price" ||
      filter === "Location" ||
      filter === "Theme" ||
      filter === "Start Date" ||
      filter === "End Date" ||
      filter === "Group Size" ||
      filter === "Vehicle"
    ) {
      newFilters[filter] = value;
    }

    if (filter === "Activities" || filter === "Features") {
      if (newFilters[filter]?.includes(value)) {
        newFilters[filter] = newFilters[filter].filter((item) => item !== value);
      } else {
        newFilters[filter] = [...(newFilters[filter] || []), value];
      }
    }
    setFilters(newFilters);
  };

  //FİLTRELEME İŞLEMLERİ////

  const filterData = () => {
    const filtered = dataa.filter((tour) => {
      // Price filter (eğer var ise)
      if (filters.Price && tour.price > filters.Price) return false;

      // Location filter (eğer var ise)
      if (filters.Location && !tour.location.toLowerCase().includes(filters.Location.toLowerCase())) return false;

      // Theme filter (eğer var ise)
      if (filters.Theme && tour.theme !== filters.Theme) return false;

      // Start Date filter (eğer var ise)
      if (filters["Start Date"] && new Date(tour.startDate) < new Date(filters["Start Date"])) return false;

      // End Date filter (eğer var ise)
      if (filters["End Date"] && new Date(tour.endDate) > new Date(filters["End Date"])) return false;

      // Rating filter (eğer var ise)
      if (filters.Rating && tour.rating < filters.Rating) return false;

      // Group Size filter (eğer var ise)
      if (filters["Group Size"] && tour.groupSize !== filters["Group Size"]) return false;

      // Vehicle filter (eğer var ise)
      if (filters.Vehicle && tour.vehicle !== filters.Vehicle) return false;

      // Activities filter (eğer var ise)
      if (filters.Activities.length > 0 && !filters.Activities.some((activity) => tour.activities.includes(activity))) return false;

      // Features filter (eğer var ise)
      if (filters.Features.length > 0 && !filters.Features.every((feature) => tour.features.includes(feature))) return false;

      return true;
    });

    setFilteredData(filtered);  // Filtrelenmiş veriyi kaydediyoruz
    setFilteredDataWithCategory(filtered, category);  // Kategoriye göre filtrelenmiş veriyi kaydediyoruz

    console.log("FİLTRELENMİŞ DATA", filtered); // Filtrelenmiş veriyi konsola yazdırıyoruz
  };

  // Filtreleri temizleme fonksiyonu
  const clearFilters = () => {
    setFilters({
      Price: 0,
      Location: "",
      Theme: "",
      "Start Date": "",
      "End Date": "",
      Rating: "",
      "Group Size": "",
      Vehicle: "",
      Activities: [],
      Features: []
    });
    setCategory(""); // Kategori sıfırlama
    setFilteredData(dataa); // Veriyi başlangıç durumuna döndür
    setFilteredDataWithCategory(dataa); // Kategoriye göre veriyi sıfırla
  };

  return (
    <div className="w-2/3 ml-3">
      {["Price", "Location", "Theme", "Start Date", "End Date", "Rating", "Group Size", "Vehicle", "Activities", "Features"].map((filter) => (
        <div key={filter} className="flex flex-col gap-2 p-2">
          <label className="text-white text-md font-medium">{filter}</label>

          {/* Price filtresi */}
          {filter === "Price" && (
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1000"
                className="p-2 rounded-md border border-white bg-white text-black"
                onChange={(e) => handleFilterChange(filter, e.target.value)}
              />
              <span className="text-white">{filters[filter] || 0}</span>
            </div>
          )}

          {/* Location filtresi */}
          {filter === "Location" && (
            <select
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Japan">Japan</option>
              <option value="France">France</option>
            </select>
          )}

          {/* Theme filtresi */}
          {filter === "Theme" && (
            <select
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            >
              <option value="">Select Theme</option>
              <option value="Jungle">Jungle</option>
              <option value="Desert">Desert</option>
              <option value="Beach">Beach</option>
              <option value="Mountain">Mountain</option>
            </select>
          )}

          {/* Start Date filtresi */}
          {filter === "Start Date" && (
            <input
              type="date"
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            />
          )}

          {/* End Date filtresi */}
          {filter === "End Date" && (
            <input
              type="date"
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            />
          )}

          {/* Group Size filtresi */}
          {filter === "Group Size" && (
            <select
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            >
              <option value="">Select Group Size</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          )}

          {/* Vehicle filtresi */}
          {filter === "Vehicle" && (
            <select
              className="p-2 rounded-md border border-white bg-white text-black"
              onChange={(e) => handleFilterChange(filter, e.target.value)}
            >
              <option value="">Select Vehicle</option>
              <option value="Speedboat">Speedboat</option>
              <option value="Van">Van</option>
              <option value="Bus">Bus</option>
              <option value="Car">Car</option>
            </select>
          )}

          {/* Activities filtresi */}
          {filter === "Activities" && (
            <div className="flex gap-2">
              {["Hiking", "Kayaking", "Snorkeling"].map((activity) => (
                <button
                  key={activity}
                  className={`p-2 rounded-md ${filters[filter]?.includes(activity) ? "bg-[#F2A945] text-white" : "bg-white"}`}
                  onClick={() => handleFilterChange(filter, activity)}
                >
                  {activity}
                </button>
              ))}
            </div>
          )}

          {/* Features filtresi */}
          {filter === "Features" && (
            <div className="flex gap-2">
              {["Halal Food", "Vegetarian Food", "Transfer"].map((feature) => (
                <button
                  key={feature}
                  className={`p-2 rounded-md ${filters[filter]?.includes(feature) ? "bg-[#F2A945] text-white" : "bg-white"}`}
                  onClick={() => handleFilterChange(filter, feature)}
                >
                  {feature}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="flex items-center justify-center gap-3 ">
        <button
          onClick={filterData}
          className="bg-primary-500 text-gray-600 p-2 rounded-md mb-4 mt-4 w-1/3"
        >
          Filtrele
        </button>
        <button className="bg-primary-500 text-gray-600 p-2 rounded-md mb-4 mt-4 w-1/3" onClick={clearFilters}>Temizle</button>
        <span className={`${filteredData.length === 0 ? "hidden" : "block text-nowrap text-white"}`} >{filteredData.length} Sonuç <button className="underline" onClick={() => setMenuOpen(false)}><Link href="#Tours">Göster</Link></button> </span> <br />
        {filteredData.length === 0 ? <span className="text-white ">0 Sonuç Uygun Turları <button className="underline" onClick={() => setMenuOpen(false)}><Link href="#Tours">Göster</Link></button></span> : null}

      </div>


    </div>
  );
};

export default TourFilter;
