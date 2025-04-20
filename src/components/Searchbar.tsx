import { useState } from "react";
import { GoSearch } from "react-icons/go";
import IconDisplay from "./IconDisplay";

const SearchBar = () => {
  const [variant, setVariant] = useState<"outline" | "solid">("outline");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="">
      <div className="shadow-md sticky z-10 top-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:items-center lg:flex-row md:flex-row flex-col py-6">
            <div className="flex items-center lg:mb-0 md:mb-0 mb-6">
              <GoSearch size={20} color="gray" />
              <input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-4 text-sm font-medium border-none outline-none bg-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setVariant("outline")}
                className={`px-6 py-2 text-xs rounded-full cursor-pointer font-semibold ${
                  variant === "outline" ? "bg-purple-50 text-purple-600" : ""
                }`}
              >
                Outline
              </button>
              <button
                onClick={() => setVariant("solid")}
                className={`px-6 py-2 text-xs rounded-full cursor-pointer font-semibold ${
                  variant === "solid" ? "bg-purple-50 text-purple-600" : ""
                }`}
              >
                Fill
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <IconDisplay variant={variant} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default SearchBar;
