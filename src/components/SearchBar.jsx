import React, { useState } from "react";
import "./Search.css"

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("");
    }}>

      <input
        className="inputSearch"
        type="text"
        placeholder="City..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="custom-btn btn-4" type="submit" value="Search" />

    </form>
  );
}
