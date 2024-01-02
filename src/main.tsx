import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>

  <GoogleOAuthProvider clientId={clientId}>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    ,
  </GoogleOAuthProvider>,
  // </React.StrictMode>
);
