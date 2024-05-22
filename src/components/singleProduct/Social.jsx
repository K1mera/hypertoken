import { Link } from "react-router-dom";
import image1 from "/assets/image1.png";

export const Social = () => {
  return (
    <section className="flex py-10 gap-5 border-b-2 border-dashed">
      <div className="w-1/2 ">
        <h2 className="font-rubik font-bold text-lg text-light pb-5">
          Site Links
        </h2>
        <div className="flex flex-col bg-light rounded-lg overflow-hidden pb-2">
          <img src={image1} alt="" />
          <div className="flex flex-col gap-3 p-2">
            <h3 className="text-dark font-robotoMono text-md font-semibold">
              Website name
            </h3>
            <p className="text-dark font-robotoMono text-sm line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="flex gap-2 py-1 px-4 border-2 border-primary rounded-lg items-center text-primary font-rubik font-bold">
              Go to the website
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="font-rubik font-bold text-lg text-light pb-5">
          Social Media
        </h2>
        <div></div>
      </div>
    </section>
  );
};
