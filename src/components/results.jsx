import { formatLocation, formatTimezone } from "../utils";
import Result from "./result";

export default function Results({ loading, data }) {
  return (
    <div className="w-72 lg:w-auto bg-white flex flex-col lg:flex-row lg:justify-between absolute p-6 -my-28 lg:-my-16 rounded-xl shadow-sm space-y-4 lg:space-y-0 lg:divide-x lg:divide-secondary">
      <Result loading={loading} title="IP Address" value={data?.ip} />
      <Result
        loading={loading}
        title="Location"
        value={data?.location && formatLocation(data.location)}
      />
      <Result
        loading={loading}
        title="Timezone"
        value={
          data?.location?.timezone && formatTimezone(data?.location?.timezone)
        }
      />
      <Result loading={loading} title="ISP" value={data?.isp} />
    </div>
  );
}
