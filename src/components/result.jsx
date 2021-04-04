export default function Result({ title, value }) {
  return (
    <section className="flex flex-col items-center lg:items-start lg:px-6">
      <h2 className="text-xs font-bold text-secondary">{title}</h2>
      <p className="pt-2 font-medium lg:text-xl">{value}</p>
    </section>
  );
}
