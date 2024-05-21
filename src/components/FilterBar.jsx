import { DropDownIcon, MenuIcon, SearchIcon } from "../svg";

export const FilterBar = () => {
  return (
    <main className="w-full flex justify-between items-center">
      <section className="flex gap-2 text-light py-5">
        <button className="filterButton">
          Category <DropDownIcon  className={'w-5'}/>
        </button>
        <button className="filterButton">
          Date listed <DropDownIcon  className={'w-5'}/>
        </button>
        <button className="filterButton">
          More <MenuIcon  className={'w-5'}/>
        </button>
      </section>
      <section>
        <button className="filterButton border-dashed">Search <SearchIcon className={'w-5'} /></button>
      </section>
    </main>
  );
};
