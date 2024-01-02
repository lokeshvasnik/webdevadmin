import { useQuery } from "@tanstack/react-query";
import ProjectCards from "./ProjectCards";
import { getProjects } from "../lib/backend/actions/projects";

const Dashboard = () => {
  // Fetch Projects
  const { data: project } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  console.log(project);

  // Fetch Question
  // const { data: topics } = useQuery({
  //   queryKey: ["topics"],
  //   queryFn: getTopics,
  // });

  // // Fetch Question
  // const { data: questions } = useQuery({
  //   queryKey: ["questions"],
  //   queryFn: getQuestions,
  // });

  // let topicsNumber: number | undefined = topics?.length;
  // let totalQuestion = questions?.length;

  return (
    <div>
      <div className="flex flex-wrap space-x-5">
        <ProjectCards data={project} />
        {/* <DisplayCard
          link="/questions"
          title="Total Question Solved"
          amount={totalQuestion}
        /> */}
        {/* <DisplayCard link="/" title="Total Topics" amount={topicsNumber} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
