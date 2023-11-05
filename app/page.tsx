import EarthMatters from "components/common/EarthMatters";
import NewProducts from "components/common/NewProducts";
import OnFocus from "components/common/OnFocus";
import RepresentativeContent from "components/common/RepresentativeContent";
import Slider from "components/common/Slider";
import Summer2023 from "components/common/Summer2023/Summer2023";
import { getOnFocusData } from "utils/getOnFocusData";
import React, { use } from "react";
import Container from "components/ui/Container";

export default function Home() {
  
  const onFocusProducts = use(getOnFocusData());

  return (
    <Container>
      <EarthMatters></EarthMatters>
      <Slider></Slider>
      <Summer2023></Summer2023>
      <NewProducts></NewProducts>
      {onFocusProducts ? <OnFocus onFocusProducts={onFocusProducts}></OnFocus> : <div>Loading...</div>}
      <RepresentativeContent></RepresentativeContent>
    </Container>
  );
}
