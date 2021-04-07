import { useState } from "react";
import ArrowIcon from "./icon-arrow";

export default function Search({ setLoading, setData }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      setLoading(true);
      fetch(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${query}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <input
        aria-label="Search Input"
        className="h-12 w-60 lg:w-96 text-xs px-4 rounded-l-xl"
        type="text"
        placeholder="Search for any IP address or domain"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        aria-label="Search Button"
        className="flex justify-center items-center h-12 w-12 bg-primary rounded-r-xl hover:opacity-75"
        type="submit"
      >
        <ArrowIcon />
      </button>
    </form>
  );
}
