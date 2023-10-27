import EarthMatters from "components/common/EarthMatters";
import NewProducts from "components/common/NewProducts";
import OnFocus from "components/common/OnFocus";
import RepresentativeContent from "components/common/RepresentativeContent";
import Slider from "components/common/Slider";
import Summer2023 from "components/common/Summer2023/Summer2023";
import { getOnFocusData } from "utils/getOnFocusData";
import React, { use } from "react";

export default function Home() {
  
  const products = use(getOnFocusData());

  return (
    <main className="mx-auto min-w-full px-4 sm:px-8 sm:py-5 md:px-8 md:py-10 lg:px-14 lg:py-14">
      <EarthMatters></EarthMatters>
      <Slider></Slider>
      <Summer2023></Summer2023>
      <NewProducts></NewProducts>
      {products ? <OnFocus onFocusProducts={products}></OnFocus> : <div>Loading...</div>}
      <RepresentativeContent></RepresentativeContent>
    </main>
  );
}
