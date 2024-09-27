import Featured from "../components/ui/featured";
import { PopularProducts } from "../components/ui/popular_products";
import { DailyBestSales } from "../components/ui/daily_best_sales";
import { DealsOfTheDay } from "../components/ui/deals_of_the_day";
import { ComplexGrid } from "../components/ui/complex_grid";
import { SubscribeCard } from "../components/ui/subscribe_card";
import { Tags } from "../components/ui/tags";
import { Hero } from "../components/ui/hero";

export  function Component() {
  return (
    <div className="bg-neutral-800 border border-neutral-900">
      <Hero />
      <Featured />
      <PopularProducts />
      <DailyBestSales />
      <DealsOfTheDay />
      <ComplexGrid />
      <SubscribeCard />
      <Tags />
      
    </div>
  );
}
