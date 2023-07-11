import driedflowersLinks from "./links/dried-flowers";
import preservedFlowers from "./links/preserved-flowers";
import preservedFoliage from "./links/preserved-foliage";
import lichensAndMoss from "./links/lichens-and-moss";
import newProducts from "./links/new-products";
import diyAndDeco from "./links/diy-and-deco";

const navItems: NavItem[] = [
  {id: 196332043593, name: "DRIED FLOWERS", children: driedflowersLinks },
  {id: 168038824141, name: "PRESERVED FLOWERS", children: preservedFlowers },
  {id: 642649405433, name: "PRESERVED FOLIAGE", children: preservedFoliage },
  {id: 670027802126, name: "LICHENS & MOSS", children: lichensAndMoss },
  {id: 309392460388, name: "NEW", children: newProducts },
  {id: 472377665632, name: "DIY & DECO", children: diyAndDeco },
];

export default navItems
