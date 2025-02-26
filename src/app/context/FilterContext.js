"use client";
import { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState({
        tickets: [], // Ticket kategorisi için filtrelenmiş veriler
        tours: []    // Tours kategorisi için filtrelenmiş veriler
    });
    const [category, setCategory] = useState(""); // Hangi kategori olduğunu tutan state

    const setFilteredDataWithCategory = (data, category) => {
        setFilteredData(prevData => ({
            ...prevData,
            [category]: data // Kategoriye göre filtrelenmiş veriyi set ediyoruz
        }));
    };

    return (
        <FilterContext.Provider value={{ filteredData, setFilteredDataWithCategory, category, setCategory }}>
            {children}
        </FilterContext.Provider>
    );
};
