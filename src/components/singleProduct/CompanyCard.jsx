import {Link} from "react-router-dom";
import {LockIcon} from "../../svg";


export const CompanyCard = () => {
  return (
    <main className="h-full w-full rounded-xl border border-primary flex flex-col p-5 shadow-card gap-2">
      <header className="font-semibold flex gap-2"> Company</header>
      <section className="h-full flex flex-col w-full">
        <h3 className="font-robotoMono font-regular ">
          Name <span className="font-rubik font-bold">Company Name</span>
        </h3>
        <h3 className="font-robotoMono font-regular ">
          Started <span className="font-rubik font-bold">May 3rd, 1998</span>
        </h3>
      </section>
      <section>
        <h3 className="font-rubik font-bold ">Assets Included in the Sale</h3>
        <ul>
          <li className="list-disc font-robotoMono text-sm list-inside">Primary domain and all site content/files</li>
          <li className="list-disc font-robotoMono text-sm list-inside">Supplier Relationships</li>
          <li className="list-disc font-robotoMono text-sm list-inside">Amazon KDP account</li>
          <li className="list-disc font-robotoMono text-sm list-inside">ACX Account</li>
          <li className="list-disc font-robotoMono text-sm list-inside">Email List</li>
        </ul>
      </section>
      <footer className="flex gap-2">
        <Link className="font-robotoMono bg-primary rounded-lg px-5 py-3 flex justify-center items-center gap-2 truncate w-full">
          <LockIcon className={"w-5"} />
          Unlock List
        </Link>
      </footer>
    </main>
  );
}
