import { DropDownIcon, MenuIcon, SearchIcon } from "../svg";

export const FilterBar = () => {
  return (
    <main className="w-full flex flex-col lg:flex-row justify-between items-center">
      <section className="flex gap-2 text-light py-5">
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
      <form className=" flex gap-0 items-between border border-dashed justify-center py-5 rounded-lg px-5 ">
        <label
          htmlFor=""
          clasname=" border-dashed flex border-light"
        >
          <input type="text" className=" w-full bg-transparent" />
        </label>
          <button className="flex gap-2 font-robotoMono justify-center ">
            Search <SearchIcon className={"w-5"} />
          </button>
      </form>
    </main>
  );
};
