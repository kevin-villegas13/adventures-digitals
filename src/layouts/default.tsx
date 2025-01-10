import Footer from "@/components/footter";
import Navigation from "@/components/navigation";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
