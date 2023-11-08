import { toast } from "react-toastify";

export const notify = (title: string) =>
  toast(title, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    className: "rounded-md",
  });
