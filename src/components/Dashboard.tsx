import DisplayCard from "./DisplayCard";
import Button from "./Button";

const Dashboard = () => {
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
    </div>
  );
};

export default Dashboard;
