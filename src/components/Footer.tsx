import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <motion.div
          className="md:flex md:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Logo Section */}
          <motion.div
            className="mb-6 md:mb-0"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://flowbite.com/" className="flex items-center">
              <motion.img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span>
            </a>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Resources Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <motion.li
                  className="mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </motion.li>
              </ul>
            </div>

            {/* Empty Section */}
            <div></div>

            {/* Legal Links */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <motion.li
                  className="mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Footer Bottom Section */}
        <motion.div
          className="sm:flex sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Media Links */}
          <motion.div
            className="flex mt-4 sm:justify-center sm:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
          >
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex items-center space-x-6">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <Github />
                  <span>Github</span>
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://www.instagram.com/"
                  className="flex items-center space-x-2 hover:underline"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
