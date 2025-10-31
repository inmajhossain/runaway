import Hero from "@/components/body-components/Hero";
import MenWomen from "@/components/body-components/MenWomen";
import ShopNewArrivals from "@/components/body-components/ShopNewArrivals";

import SaleFavorite from "@/components/body-components/SaleFavorite";
import WomensFashion from "@/components/body-components/WomensFashion";
import TrendingNow from "@/components/body-components/TrendingNow";
import ShopByCategory from "@/components/body-components/ShopByCategory";
import Quality from "@/components/body-components/Quality";
import Scroling from "@/components/body-components/Scroling";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto text-center custom-container">
      <Hero />
      <ShopNewArrivals />
      <MenWomen />
      <Scroling />
      <SaleFavorite />
      <WomensFashion />
      <TrendingNow />
      <ShopByCategory />
      <Quality />
    </div>
  );
}
