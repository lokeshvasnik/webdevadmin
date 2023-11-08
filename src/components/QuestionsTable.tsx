import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion } from "../backend/Api/questions";
import { notify } from "./UI/toast";
import Button from "./Button";

interface Question {
  id: number;
  question: string;
  level: string;
  topic: string;
}

const QuestionsTable = ({ questions }: any) => {
  const queryClient = useQueryClient();
  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteQuestion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questions"],
      });
      notify("Deleted Successfully");
    },
  });

  return (
    <div className="-mx-4 overflow-x-auto px-4 py-4 transition sm:-mx-8 sm:px-8">
      <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full leading-normal">
          <thead>
            <tr className="text-center">
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3  text-xs font-semibold uppercase tracking-wider text-gray-700">
                Question
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3  text-xs font-semibold uppercase tracking-wider text-gray-700">
                Type
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3  text-xs font-semibold uppercase tracking-wider text-gray-700">
                Difficulty
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3  text-xs font-semibold uppercase tracking-wider text-gray-700">
                Action
              </th>
              <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {questions?.map((item: Question) => (
              <tr key={item.id}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="whitespace-no-wrap text-gray-900">
                        {item.question}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap text-gray-900">
                    {item.topic}
                  </p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  {
                    <p
                      className={`w-14 min-w-fit rounded-full border ${
                        item.level == "Medium" ? "bg-orange-400" : ""
                      }
                    ${item.level == "Hard" ? "bg-red-600" : ""}
                    ${
                      item.level === "Easy" ? "bg-green-600" : ""
                    }  bg-[#434343] px-3 py-1 `}
                    >
                      {item.level}
                    </p>
                  }
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                    <Button
                      bgColor="bg-red-400 hover:bg-red-500"
                      className="relative"
                      type="button"
                      onClick={() => mutate(item.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-right text-sm"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionsTable;
