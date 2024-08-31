import Featured from "./featured";
import { PopularProducts } from "./popular_products";
import { DailyBestSales } from "./daily_best_sales";
import { DealsOfTheDay } from "./deals_of_the_day";
import { ComplexGrid } from "./complex_grid";
import { SubscribeCard } from "./subscribe_card";
import { Tags } from "./tags";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <Header />
      <Hero />
      <Featured />
      <PopularProducts />
      <DailyBestSales />
      <DealsOfTheDay />
      <ComplexGrid />
      <SubscribeCard />
      <Tags />
      <Footer />
    </div>
  );
}
