import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addTopic } from "../backend/Api/topics";
import DisplayCard from "./DisplayCard";
import Button from "./Button";
import Input from "./Input";
import { notify } from "./UI/toast";
const Dashboard = () => {
  const { register, handleSubmit } = useForm();

  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (formData: object) => addTopic(formData),
    onSuccess: () => {
      notify("Title Added");
    },
  });

  const onSubmitHandler = (formData: any) => {
    mutate(formData);
  };

  return (
    <div>
      <div className="flex flex-wrap space-x-5">
        <DisplayCard title="Total Question Solved" amount="50" />
        <DisplayCard title="Total Topics" amount="600" />
        <DisplayCard title="Total Topics" amount="600" />
        <DisplayCard title="Total Topics" amount="600" />
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
