import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTopic, deleteTopic, getTopics } from "../actions/topics";
import toast from "react-hot-toast";

export const useTopic = () => {
  const queryClient = useQueryClient();

  // Fetch Question
  const { data: topics, isLoading } = useQuery({
    queryKey: ["topics"],
    queryFn: getTopics,
  });

  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (formData: object) => addTopic(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Topic Added");
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id: number) => deleteTopic(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      toast.success("Deleted Successfully");
    },
  });
  return { isLoading, topics, mutate, deleteMutate };
};
