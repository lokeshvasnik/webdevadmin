import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject } from "../lib/backend/actions/projects";
import Button from "./Button";
import toast from "react-hot-toast";

const ProjectCards = ({ data }: any) => {
  const queryClient = useQueryClient();
  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteProject(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      toast.success("Project Deleted", {
        position: "bottom-center",
      });
    },
  });

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((project: any, index: any) => (
        <div key={index}>
          <div className="px-15 justify-left mx-5 mb-10 flex w-80 rounded bg-[#232323] p-5">
            <div className="mr-4">
              <img
                className="h-10 w-10 rounded-full"
                src={project.image}
                alt="error"
              />
            </div>
            <div className="flex items-center justify-between space-x-5">
              <p className="font-semibold uppercase">{project.title}</p>
              <Button onClick={() => mutate(project.id)} className="bg-red-400">
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
