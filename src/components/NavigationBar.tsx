import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Clock3,
    ArrowRightLeft,
    BarChart2,
} from "lucide-react";

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
    return (
        <div className="px-10 p-12 flex flex-col  border-r w-1/5 h-screen">
            <div className="flex flex-col space-y-8">
                {navLinks.map((navLink, index) => (
                    <NavLink
                        to={navLink.to}
                        key={index}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-yellow-400 text-black flex p-3 space-x-3 rounded shadow-md transition-all"
                                : "flex p-3 space-x-3  rounded shadow-md transition"
                        }
                    >
                        {navLink.icon}
                        <span>{navLink.title}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default NavigationBar;
