import Result from "./result";

export default function Results() {
  return (
    <div className="w-72 lg:w-auto bg-white flex flex-col lg:flex-row lg:justify-between absolute p-6 -my-28 lg:-my-16 rounded-xl shadow-sm space-y-4 lg:space-y-0 lg:divide-x lg:divide-secondary">
      <Result title="IP Address" value="192.212.174.101" />
      <Result title="Location" value="Brooklyn, NY 10001" />
      <Result title="Timezone" value="UTC -05:00" />
      <Result title="ISP" value="SpaceX Starlink" />
    </div>
  );
}
