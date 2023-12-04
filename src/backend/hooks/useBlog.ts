import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../Api/blogs";

export const useBlog = () => {
  // Fetch Question
  const { data, isLoading } = useQuery({
    queryKey: ["topics"],
    queryFn: getBlogs,
  });

  return { data, isLoading };
};
