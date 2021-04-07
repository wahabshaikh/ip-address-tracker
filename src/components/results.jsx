import { formatLocation, formatTimezone } from "../utils";
import Result from "./result";

export default function Results({ loading, data }) {
  return (
    <div className="z-10 w-72 lg:w-auto bg-white flex flex-col lg:flex-row lg:justify-between absolute p-3 lg:p-8 -my-24 lg:-my-12 rounded-xl shadow-sm space-y-4 lg:space-y-0 lg:divide-x lg:divide-secondary">
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
