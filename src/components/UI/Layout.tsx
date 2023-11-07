import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Header from "../Header";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="flex bg-[#434343] text-white">
                {/* Header */}
                {/* Sidebar */}
                <NavigationBar />
                {/* Outlet */}
                <div className="w-full mt-10 px-5  justify-center items-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
