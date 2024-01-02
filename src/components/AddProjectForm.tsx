import Button from "./Button";
import Input from "./Input";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addProject } from "../lib/backend/actions/projects";
import { useState } from "react";

const AddProjectForm = () => {
  const { register, handleSubmit } = useForm();
  const [image, setFiles] = useState<any>([]);

  // Mutate question
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: object) => addProject(formData),
    onSuccess: () => {
      toast.success("Project Added", {
        position: "bottom-center",
      });
    },
  });

  const onSubmitHandler = async (formData: any) => {
    console.log(formData);
    mutate({ ...formData, image });
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="w-90 mb-4 rounded bg-yellow-400 px-8 pb-8 pt-6 shadow-md backdrop-blur-[6rem]  backdrop-brightness-90"
      >
        <Input
          label="Title"
          {...register("title", {
            required: true,
          })}
          className="mb-3"
        />
        <Input
          label="Description"
          {...register("description", {
            required: true,
          })}
          className="mb-3 h-40"
        />

        <Input
          label="Link"
          {...register("link", {
            required: true,
          })}
          className="mb-3"
        />

        {/* SELECT TITLE */}
        <label
          htmlFor="image"
          className="mb-1 block text-sm font-bold text-gray-700"
        >
          Image
        </label>
        <input
          type="file"
          accept="image/*"
          {...register("image", {
            required: true,
          })}
          onChange={(event) => {
            setFiles(event.target.files);
          }}
          className="my-4 w-full rounded border border-none file:cursor-pointer file:rounded file:border-none file:bg-slate-100 file:p-2"
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
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddProjectForm;
