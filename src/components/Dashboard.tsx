import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTopic, getTopics } from "../backend/Api/topics";
import { getQuestions } from "../backend/Api/questions";
import { notify } from "./UI/toast";
import DisplayCard from "./DisplayCard";
import Button from "./Button";
import Input from "./Input";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  // Fetch Question
  const { data: topics } = useQuery({
    queryKey: ["topics"],
    queryFn: getTopics,
  });

  // Fetch Question
  const { data: questions } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (formData: object) => addTopic(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["topics"],
      });
      notify("Topic Added");
    },
  });

  const onSubmitHandler = (formData: any) => {
    mutate(formData);
  };

  let topicsNumber: number | undefined = topics?.length;
  let totalQuestion = questions?.length;

  return (
    <div>
      <div className="flex flex-wrap space-x-5">
        <DisplayCard
          link="/questions"
          title="Total Question Solved"
          amount={totalQuestion}
        />
        <DisplayCard link="/" title="Total Topics" amount={topicsNumber} />
      </div>
      <div>
        <Button className="my-5">Add New Topic</Button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mb-4 w-80 rounded border border-white px-8 pb-8  pt-6 shadow-md"
      >
        <Input placeholder="Enter Title" {...register("title")} />
        <Button type="submit" className="mt-5">
          Add
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
