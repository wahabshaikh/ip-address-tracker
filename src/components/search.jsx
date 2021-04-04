import ArrowIcon from "./icon-arrow";

export default function Search() {
  return (
    <form className="flex justify-center">
      <input
        className="h-12 w-60 lg:w-96 text-xs px-4 rounded-l-xl"
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button
        aria-label="Search"
        className="flex justify-center items-center h-12 w-12 bg-primary rounded-r-xl hover:opacity-75"
        type="submit"
      >
        <ArrowIcon />
      </button>
    </form>
  );
}
