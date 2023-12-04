import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../Api/login";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role == "authenticated" };
};
