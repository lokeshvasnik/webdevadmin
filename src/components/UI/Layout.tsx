import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex bg-[#434343] text-white">
        {/* Header */}
        {/* Sidebar */}
        <NavigationBar />
        {/* Outlet */}
        <section className="mt-10 w-full items-center  justify-center px-5">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default Layout;
