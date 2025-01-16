import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
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
            <a href="#" className="flex items-center">
              <motion.img
                src="../logo/logo.webp"
                className="h-14 me-3" // Aumentamos el tamaño del logo
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              />
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
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="font-medium">
                <motion.li
                  className="mb-4"
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
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
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
          className="my-6 border-gray-700 sm:mx-auto lg:my-8"
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
          <span className="text-sm sm:text-center">
            © {currentYear}{" "}
            <a href="#" className="hover:underline">
              VideoGameShop™
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
            <ul className="font-medium flex items-center space-x-6">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://github.com/yourprofile"
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
                  href="https://www.instagram.com/yourprofile"
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
