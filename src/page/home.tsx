import CategoriesSection from "@/components/categorie-section";
import ProductCards from "@/components/products-cards";
import PromoBanner from "@/components/promo-banner";
import DefaultLayout from "@/layouts/default";

const HomePage = () => {
  return (
    <DefaultLayout>
      <PromoBanner />
      <ProductCards />
    </DefaultLayout>
  );
};

export default HomePage;
