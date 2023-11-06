import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../backend/supabase";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { toast } from "react-toastify";

const AddQuestionForm = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const notify = () =>
        toast("New Question Added", {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    const addQuestion = async (formData: any) => {
        console.log(formData);
        try {
            setError("");
            const { data } = await supabase
                .from("questions")
                .insert([formData])
                .select();
            notify();
            return data;
        } catch (error: any) {
            setError(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(addQuestion)}
            className="bg-yellow-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
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
            <Button type="submit" bgColor="bg-[#434343]">
                Add
            </Button>
        </form>
    );
};

export default AddQuestionForm;
