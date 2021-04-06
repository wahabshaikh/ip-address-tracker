export default function Result({ loading, title, value }) {
  return (
    <section className="flex flex-col items-center lg:items-start lg:px-6">
      <h2 className="text-xs font-bold text-secondary">{title}</h2>
      <p className="text-center pt-2 font-medium lg:text-xl">
        {loading ? "" : value}
      </p>
    </section>
  );
}
