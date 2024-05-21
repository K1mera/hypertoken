import {Link} from "react-router-dom";
import { InfoIcon, CategoryIcon, LockIcon } from "../svg";

export const MarketCard = () => {
  return (
    <main className="w-[400px] h-[400px] rounded-xl border border-primary flex flex-col p-5 shadow-card gap-5">
      <header className="font-semibold flex gap-2">
        {" "}
        <CategoryIcon className={"w-5 "} /> Category
      </header>
      <ul className="font-rubik font-bold flex gap-2 text-lg">
        <li className="text-thertiary">BTC 6.61</li>
        <li className="text-thertiary">SOL 2,729.97</li>
        <li className="text-thertiary">USD 401,429</li>
      </ul>
      <section className="h-full flex flex-col gap-2 w-full">
        <h3 className="font-robotoMono font-regular text-lg">Monthly Multiple <span className='font-rubik font-bold'>30X</span></h3>
        <p className="font-robotoMono font-light line-clamp-4 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptas
          dolorum placeat amet distinctio atque! Quos, totam consectetur!
        </p>
      </section>
      <footer className="flex gap-2">
        <Link to={`/${'id'}`} className="font-robotoMono rounded-lg px-5 py-3 border border-secondary flex justify-center items-center gap-2 truncate">
        <InfoIcon className={'w-5'} />
          View Listing
        </Link>
        <Link className="font-robotoMono bg-primary rounded-lg px-5 py-3 flex justify-center items-center gap-2 truncate">
            <LockIcon className={'w-5'} />
          Unlock List
        </Link>
      </footer>
    </main>
  );
}
