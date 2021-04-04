import Attribution from "./components/attribution";
import Map from "./components/map";
import Results from "./components/results";
import Search from "./components/search";

export default function App() {
  return (
    <div className="font-body text-primary min-h-screen flex flex-col">
      <header className="h-mobile xl:h-desktop bg-pattern bg-cover bg-center">
        <h1 className="text-center font-bold text-white lg:text-xl my-7 lg:my-8">
          IP Address Tracker
        </h1>
        <Search />
      </header>
      <main className="flex-1 flex justify-center">
        <Results />
        <Map />
      </main>
      <footer className="text-center">
        <Attribution />
      </footer>
    </div>
  );
}
