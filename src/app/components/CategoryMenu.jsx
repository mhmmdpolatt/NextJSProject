import { IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import TicketsFilter from "./filter/TicketFilter";
import TourFilter from "./filter/TourFilter"

// Kategorilere özel filtreler
const categoryFilters = {
  Tours: [
    "Price", "Location", "Theme", "Start Date", "End Date",
    "Rating", "Group Size", "Vehicle", "Activities", "Features"
  ],
  Tickets: [
    "Price", "Event Date", "Venue"
  ],
  Rent: [
    "Duration", "Price", "City"
  ],
  Transfer: [
    "Vehicle Type", "Price", "From-To"
  ]
};

const CategoryMenu = ({ menuOpen, setMenuOpen }) => {
  const [filters, setFilters] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const menuRef = useRef();
  // Dışarıya tıklama kontrolü
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Menü dışına tıklanırsa menüyü kapat
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setMenuOpen]);

  const categories = Object.keys(categoryFilters);

  return (
    <div
      className={`absolute top-0 left-0 md:left-[-75px] h-[100vh] w-[100vw] md:w-[28vw] bg-[#E07516] z-50 shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 overflow-scroll`}
    >
      {/* Kapatma Butonu */}
      <div className="flex justify-between items-center p-4 border-b border-white">
        <h2 className="text-white text-lg font-semibold">Filter</h2>
        <IoClose
          className="text-white text-3xl cursor-pointer hover:scale-110 transition-all"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* Kategoriler Listesi */}
      <div className="flex justify-center gap-x-2 mt-5 ">
        {categories.map((category) => (
          <span
            key={category}
            className={`text-sm md:text-lg  font-medium cursor-pointer px-4 py-2 rounded-md transition-all ${selectedCategory === category
              ? "bg-white text-[#E07516]"
              : "bg-[#F2A945] text-white hover:bg-white hover:text-[#E07516]"}`}
            onClick={() => setSelectedCategory(category)}
          >

            <Link href={`#${category}`}>
              {category}
            </Link>
          </span>
        ))}
      </div>

      {/* Seçili Kategoriye Özel Filtreler BURAYA YEDEK JSXİ EKLEYEBİLİRİM SONRADAN  */}
      {selectedCategory === "Tickets" && <TicketsFilter filters={filters} category={"Tickets"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      {selectedCategory === "Tours" && <TourFilter filters={filters} category={"Tours"} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </div>
  );
};

export default CategoryMenu;
