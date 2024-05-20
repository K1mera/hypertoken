

export const FilterBar = () => {
  return (
    <main className="w-full flex justify-between items-center">
      <section className="flex gap-2 text-light py-5">
        <button className="filterButton">Category</button>
        <button className="filterButton">Date listed</button>
        <button className="filterButton">More</button>
      </section>
      <section>
        <button className="filterButton border-dashed">More</button>
      </section>
    </main>
  );
}
