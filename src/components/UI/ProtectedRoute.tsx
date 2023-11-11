import { useNavigate } from "react-router-dom";
import { useUser } from "../../backend/hooks/useUser";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const ProtectedRoute = ({ children }: any) => {
  // 1. load the authenticated user
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();
  console.log(isAuthenticated);

  useEffect(
    function () {
      // Redirect to the login page if the user is not authenticated and loading has finished
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <ClipLoader size={60} color="#36d7b7" />
      </main>
    );

  // 4 if user exist , render the application
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
