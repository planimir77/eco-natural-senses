import EarthMatters from './components/common/EarthMatters'
import NewProducts from './components/common/NewProducts'
import OnFocus from './components/common/OnFocus'
import RepresentativeContent from './components/common/RepresentativeContent'
import Slider from './components/common/Slider'
import SuperDeal from './components/common/SuperDeal'

export default function Home() {
  return (
    <main>
      <EarthMatters></EarthMatters>
      <Slider></Slider>
      <NewProducts></NewProducts>
      <OnFocus></OnFocus>
      <SuperDeal></SuperDeal>
      <RepresentativeContent></RepresentativeContent>
    </main>
  )
}
