import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../backend/Api/questions";
import { MagnifyingGlass } from "react-loader-spinner";
import Button from "./Button";
import QuestionsTable from "./QuestionsTable";

const ShowQuestions = () => {
  const [filterValue, setData] = useState("All");
  // Fetched Questions
  const { data: questions, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  if (isLoading)
    return (
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    );

  let filteredQuestions;
  if (filterValue == "All") filteredQuestions = questions;
  if (filterValue == "Medium") {
    filteredQuestions = questions?.filter((item) => item.level == filterValue);
  }
  if (filterValue == "Easy") {
    filteredQuestions = questions?.filter((item) => item.level == filterValue);
  }
  if (filterValue == "Easy") {
    filteredQuestions = questions?.filter((item) => item.level == filterValue);
  }

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <Button
            onClick={() => setData("All")}
            bgColor="bg-red-400"
            className="mx-2"
          >
            All
          </Button>
          <Button
            onClick={() => setData("Medium")}
            bgColor="bg-red-400"
            className="mx-2"
          >
            Medium
          </Button>
          <Button
            onClick={() => setData("Easy")}
            bgColor="bg-red-400"
            className="mx-2"
          >
            Easy
          </Button>

          <QuestionsTable questions={filteredQuestions} />
        </div>
      </div>
    </div>
  );
};

export default ShowQuestions;

// const handleSubmit = (values: string) => {
//   searchParams.set("level", values);
//   setSearchParams(searchParams);
//   return filtered; // array
// };
