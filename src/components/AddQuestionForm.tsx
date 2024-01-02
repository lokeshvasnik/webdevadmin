import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { addQuestion } from "../lib/backend/actions/questions";
import ClipLoader from "react-spinners/ClipLoader";

const AddQuestionForm = () => {
  const { register, handleSubmit } = useForm();

  // Mutate question
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: object) => addQuestion(formData),
    onSuccess: () => {
      toast.success("Added Questions.", {
        position: "bottom-center",
      });
    },
  });

  const onSubmitHandler = async (formData: any) => {
    mutate(formData);
  };

  return (
    <>
      <h1 className="my-3 text-2xl font-bold uppercase tracking-widest">
        add new question
      </h1>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mb-4 w-80 rounded bg-yellow-500 px-8 pb-8 pt-6 shadow-md"
      >
        {/* SELECT TITLE */}
        <Input
          label="Title"
          {...register("question", {
            required: true,
          })}
          className="mb-3"
        />
        {/* SELECT TOPIC  */}
        <Select
          label="Select Topic"
          options={["Arrays", "Strings", "Linked List"]}
          {...register("topic")}
        />
        {/* SELECT DIFFICULTY */}
        <Select
          label="Select Difficulty"
          options={["Easy", "Medium", "Hard"]}
          {...register("level")}
        />
        <Button
          type="submit"
          className="flex items-center justify-center"
          bgColor="bg-[#434343] text-white"
          onHover="bg-yellow-800"
          disabled={isPending}
        >
          {isPending && (
            <ClipLoader className="mx-1" size={19} color="#36d7b7" />
          )}
          Add
        </Button>
      </form>
    </>
  );
};

export default AddQuestionForm;
