import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { chartConfig } from "../../chartConfig";

export const ChartComponent = () => {
  return (
    <main className="flex flex-col w-full gap-5 py-10 border-b-2 border-dashed">
      <div>
        <h2 className="font-rubik font-bold text-lg">Profit & loss</h2>
      </div>
      <section className="bg-light rounded-lg">
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          ></CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </section>
    </main>
  );
};
