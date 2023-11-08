import { Slide, ToastContainer } from "react-toastify";

const ToasLayout = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
      transition={Slide}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToasLayout;
