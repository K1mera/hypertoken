import { DropDownIcon, MenuIcon, SearchIcon } from "../svg";

export const FilterBar = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-between lg:justify-center items-center">
      <section className="flex w-full justify-between lg:justify-start lg:items-center h-full gap-2 text-light py-5">
        <button className="filterButton">
          Category <DropDownIcon className={"w-5"} />
        </button>
        <button className="filterButton">
          Date listed <DropDownIcon className={"w-5"} />
        </button>
        <button className="filterButton">
          More <MenuIcon className={"w-5"} />
        </button>
      </section>
      <form className="mb-5 lg:mb-0 w-full lg:w-auto flex gap-0 items-center border border-dashed justify-between py-2 rounded-lg px-5">
        <label
          htmlFor=""
          clasname=" border-dashed flex border-light"
        >
          <input type="text" className="w-full bg-transparent" />
        </label>
          <button className="flex gap-2 font-robotoMono justify-center ">
            Search <SearchIcon className={"w-5"} />
          </button>
      </form>
    </main>
  );
};
