
import HeroSection from "./compunents/Hero";
import FeaturedProducts from "./compunents/Feature";
import LatestProducts from "./compunents/Latest";
import ShopexOffer from "./compunents/Shopx";
import UniqueFeatures from "./compunents/UniqueFeatures";
import TrendingProducts from "./compunents/Trending";
import DiscountItem from "./compunents/Discount";
import TopCategories from "./compunents/TopCategory";
import CustomDiv from "./compunents/Custom";
import LatestBlog from "./compunents/LatestBlog";

export default async function Home() {
  
  return (
  <>
  <HeroSection />
 <FeaturedProducts />
 <LatestProducts />
 <ShopexOffer />
 <UniqueFeatures />
 <TrendingProducts />
 <DiscountItem />
 <TopCategories />
 <CustomDiv />
<LatestBlog />

    </>
  
  );
}
