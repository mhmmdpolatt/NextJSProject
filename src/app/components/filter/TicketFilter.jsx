"use client";
import { useState, useEffect } from 'react';
import { useFilter } from '@/app/context/FilterContext';
import Link from 'next/link';

const TicketsFilter = ({ category, menuOpen, setMenuOpen }) => {
  const { setFilteredDataWithCategory, setCategory } = useFilter(); // Context'ten alınan fonksiyonlar
  const [dataa, setDataa] = useState([]);
  const [filters, setFilters] = useState({
    Price: 0,
    Location: '',
    Date: ''
  });
  const [filteredData, setFilteredData] = useState([]);

  // API'den verileri çekiyoruz
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/tours');
        const data = await res.json();
        setDataa(data.tickets || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  /// Filtreleme işlemi//////
  const filterData = () => {
    let filtered = dataa;

    if (filters.Price > 0) {
      filtered = filtered.filter(ticket => {
        const price = parseFloat(ticket.price.replace('$', '').trim()); // Dolar işaretini kaldır ve sayıya dönüştür
        return price <= filters.Price;
      });
    }

    // Location filtresi (sadece şehir ismini alıp karşılaştıracağız)
    if (filters.Location) {
      filtered = filtered.filter(ticket => {
        const locationCity = ticket.location.split(', ')[1]; // Konumdan şehri al
        return locationCity === filters.Location;
      });
    }

    // Date filtresi
    if (filters.Date) {
      filtered = filtered.filter(ticket => ticket.date === filters.Date);
    }

    setFilteredData(filtered); // Filtrelenmiş veriyi state'e ekle
    setFilteredDataWithCategory(filtered, category);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const clearFiltersr = () => {
    setFilters({
      Price: 0,
      Location: "",
      Date: ""
    })
  }


  return (
    <div className="flex flex-col gap-4 w-2/3 mx-1 mt-8 ml-4">
      {/* Price */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-md font-medium">Price</label>
        <input
          type="range"
          min="0"
          max="1000"
          className="p-2 rounded-md border border-white bg-white text-black"
          value={filters.Price}
          onChange={(e) => handleFilterChange("Price", e.target.value)}
        />
        <span className="text-white">${filters.Price}</span>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-md font-medium">Location</label>
        <select
          className="p-2 rounded-md border border-white bg-white text-black"
          value={filters.Location}
          onChange={(e) => handleFilterChange("Location", e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
        </select>
      </div>

      {/* Date */}
      <div className="flex flex-col gap-2">
        <label className="text-white text-md font-medium">Date</label>
        <input
          type="date"
          className="p-2 rounded-md border border-white bg-white text-black"
          value={filters.Date}
          onChange={(e) => handleFilterChange("Date", e.target.value)}
        />
      </div>

      {/* Filtrele Butonu */}
      <div className="flex items-center justify-center gap-3 ">
        <button
          onClick={filterData}
          className="bg-primary-500 text-gray-600 p-2 rounded-md mb-4 mt-4 w-1/3"
        >
          Filtrele
        </button>
        <button className="bg-primary-500 text-gray-600 p-2 rounded-md mb-4 mt-4 w-1/3" onClick={clearFiltersr}>Temizle</button>
        <span className={`${filteredData.length === 0 ? "hidden" : "block text-nowrap text-white"}`} >{filteredData.length} Sonuç <button className="underline" onClick={() => setMenuOpen(false)}><Link href="#Tickets">Göster</Link></button> </span> <br />
        {filteredData.length === 0 ? <span className="text-white ">0 Sonuç || Tüm Turları<button className="underline" onClick={() => setMenuOpen(false)}><Link href="#Tickets">Göster</Link></button></span> : null}
      </div>



    </div>
  );
};

export default TicketsFilter;
