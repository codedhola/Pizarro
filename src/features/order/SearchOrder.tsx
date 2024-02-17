import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const SearchOrder = ({}: Props) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.length < 3) return;
    navigate(`/order/${query}`);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Order"
        className="w-28 rounded-full bg-sky-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
