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
      />
    </form>
  );
};

export default SearchOrder;
