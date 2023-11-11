import { useQuery } from "@tanstack/react-query";
import { getTopics } from "../backend/Api/topics";
import { getQuestions } from "../backend/Api/questions";
import DisplayCard from "./DisplayCard";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
