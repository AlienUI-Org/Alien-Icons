import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <div className="py-7 shadow-md sticky z-10 top-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <GoSearch size={20} color="gray" />
        <input
          placeholder="Search all icons..."
          className="flex-1 ml-4 text-sm font-medium border-none outline-none bg-transparent "
        />
      </div>
    </div>
  );
};

export default SearchBar;
