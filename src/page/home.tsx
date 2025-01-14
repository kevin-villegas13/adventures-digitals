import ProductCards from "@/components/products-cards";
import PromoBanner from "@/components/promo-banner";
import HomeLayout from "@/layouts/home";

const HomePage = () => {
  return (
    <HomeLayout>
      <PromoBanner />
      <ProductCards />
    </HomeLayout>
  );
};

export default HomePage;
