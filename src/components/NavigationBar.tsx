import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowRightLeft,
  BarChart2,
  PauseCircle,
  ProjectorIcon,
} from "lucide-react";
import Button from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/backend/actions/login";
import toast from "react-hot-toast";

const navLinks = [
  {
    to: "/",
    icon: <LayoutDashboard />,
    title: "Home",
  },
  {
    to: "/profile",
    icon: <PauseCircle />,
    title: "Profile",
  },
  // {
  //   to: "/questions",
  //   icon: <Clock3 />,
  //   title: "Questions",
  // },
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
  {
    to: "/projects",
    icon: <ProjectorIcon />,
    title: "Projects",
  },
];
const NavigationBar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
      toast.success("Logged Out.", {
        position: "bottom-center",
      });
    },
  });
  return (
    <div className="flex h-screen w-1/5 flex-col  border-r p-12 px-10">
      <div className="flex flex-col space-y-8">
        {navLinks.map((navLink, index) => (
          <NavLink
            to={navLink.to}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "flex space-x-3 rounded bg-yellow-400 p-3 text-black shadow-md transition-all"
                : "flex space-x-3 rounded  p-3 shadow-md transition"
            }
          >
            {navLink.icon}
            <span>{navLink.title}</span>
          </NavLink>
        ))}
        <Button bgColor="bg-red-400" onClick={() => mutate()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default NavigationBar;
