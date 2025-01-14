import HomeLayout from "@/layouts/home";
import { Heart, Star } from "lucide-react";
import { Image, Button } from "@nextui-org/react";

const ProductDetailPage = () => {
  return (
    <HomeLayout>
      <section className="py-8 bg-white dark:bg-gray-900 md:py-16">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="max-w-md lg:max-w-lg mx-auto">
              <Image
                className="w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="iMac Light"
              />
              <Image
                className="w-full hidden dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="iMac Dark"
              />
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB
                SSD, Mac OS, Pink
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
                  $1,249.99
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 text-yellow-300">
                    <Star size={16} />
                  </div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700">
                  <Heart size={20} />
                  Add to favorites
                </Button>
                <Button className="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700">
                  <Star size={20} />
                  Add to cart
                </Button>
              </div>
              <hr className="my-6 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
                with Magic Keyboard or Magic Keyboard with Touch ID.
              </p>
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default ProductDetailPage;
