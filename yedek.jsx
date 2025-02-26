{selectedCategory && (
    <div className="p-4 space-y-4 overflow-auto">
      {categoryFilters[selectedCategory].map((filter) => (
        <div key={filter} className="flex flex-col gap-2">
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

          {/* Rating filtresi */}
          {filter === "Rating" && (
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`p-2 rounded-md ${filters[filter] === rating ? "bg-[#F2A945] text-white" : "bg-white"}`}
                  onClick={() => handleFilterChange(filter, rating)}
                >
                  {rating} Stars
                </button>
              ))}
            </div>
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

      <div className="flex justify-center gap-x-5">
        <button
          className="bg-white text-[#E07516] px-4 py-2 rounded-md font-medium w-full mt-4 hover:bg-[#ffb246] transition-all"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
        <button
          className="bg-white text-[#E07516] px-4 py-2 rounded-md font-medium w-full mt-4 hover:bg-[#ffb246] transition-all"
          onClick={() => setFilters({})}

        >
          Reset
        </button>
      </div>

      <span>{filteredData.length} adet sonuçla eşleşti</span>
    </div>
  )}