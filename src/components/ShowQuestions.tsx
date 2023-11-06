import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteQuestion, getQuestions } from "../backend/Api/questions";
import { MagnifyingGlass } from "react-loader-spinner";
import Button from "./Button";
import { toast } from "react-toastify";

interface Question {
    id: number;
    question: string;
    level: string;
    topic: string;
}

const ShowQuestions = () => {
    const queryClient = useQueryClient();
    const notify = () =>
        toast("Deleted Successfully", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    // Fetch Question
    const { data: questions, isLoading } = useQuery({
        queryKey: ["questions"],
        queryFn: getQuestions,
    });

    console.log(questions);
    // Mutate question

    const { mutate } = useMutation({
        mutationFn: (id: number) => deleteQuestion(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["questions"],
            });
            notify();
        },
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

    return (
        <div className="overflow-hidden">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr className="text-center">
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Question
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Type
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Difficulty
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                            Action
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions?.map((item: Question) => (
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex">
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            {item.question}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.topic}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="border rounded-full w-14 min-w-fit px-3 py-1 bg-[#434343] ">
                                                    {item.level}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <Button
                                                        bgColor="bg-red-400"
                                                        className="relative"
                                                        onClick={() =>
                                                            mutate(item.id)
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowQuestions;
