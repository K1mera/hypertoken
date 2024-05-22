
import { ChartComponent, CompanyOverview, Opening, OptionsBar, Social, Summary } from "../components";



import {Link} from "react-router-dom";

export const SingleProduct = () => {
  return (
    <main className="h-full w-full flex flex-col ">
      <OptionsBar />
      <Opening />
      <Social />
      <CompanyOverview />

      
      <ChartComponent />
      <Summary />
    </main>
  );
};
