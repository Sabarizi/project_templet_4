
import HeroSection from "./compunents/Hero";
import FeaturedProducts from "./compunents/Feature";
import LatestProducts from "./compunents/Latest";
import ShopexOffer from "./compunents/Shopx";
import UniqueFeatures from "./compunents/UniqueFeatures";
import TrendingProducts from "./compunents/Trending";
import DiscountItem from "./compunents/Discount";

export default function Home() {
  return (
  <>
  <HeroSection />
 <FeaturedProducts />
 <LatestProducts />
 <ShopexOffer />
 <UniqueFeatures />
 <TrendingProducts />
 <DiscountItem />
    </>
  
  );
}
