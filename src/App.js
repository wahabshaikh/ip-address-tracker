import { useEffect, useState } from "react";
import Attribution from "./components/attribution";
import Map from "./components/map";
import Results from "./components/results";
import Search from "./components/search";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="font-body text-primary min-h-screen flex flex-col">
      <header className="h-mobile xl:h-desktop bg-pattern bg-cover bg-center">
        <h1 className="text-center font-bold text-white lg:text-xl my-7 lg:my-8">
          IP Address Tracker
        </h1>
        <Search setLoading={setLoading} setData={setData} />
      </header>
      <main className="flex-1 flex justify-center">
        <Results loading={loading} data={data} />
        <Map />
      </main>
      <footer className="text-center">
        <Attribution />
      </footer>
    </div>
  );
}
