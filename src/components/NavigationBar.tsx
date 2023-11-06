import {
    LayoutDashboard,
    Clock3,
    ArrowRightLeft,
    BarChart2,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    {
        to: "/",
        icon: <LayoutDashboard />,
        title: "Home",
    },
    {
        to: "/questions",
        icon: <Clock3 />,
        title: "Questions",
    },
    {
        to: "/achievements",
        icon: <BarChart2 />,
        title: "Acheivments",
    },
    {
        to: "/goals",
        icon: <ArrowRightLeft />,
        title: "Goal",
    },
];

const NavigationBar = () => {
    const [isActive, SetActive] = useState(0);

    return (
        <div className="px-10 p-12 flex flex-col  border-r w-1/5 h-screen">
            <div className="mt-10 flex flex-col space-y-8">
                {navLinks.map((navLink, index) => (
                    <Link
                        to={navLink.to}
                        key={index}
                        onClick={() => SetActive(index)}
                        className={`flex space-x-3 p-3 rounded ${
                            isActive == index
                                ? "bg-yellow-400   text-black"
                                : ""
                        }`}
                    >
                        {navLink.icon}
                        <span>{navLink.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavigationBar;
