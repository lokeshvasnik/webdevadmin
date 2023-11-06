import supabase from "../supabase";
// GET REQUEST FOR ALL THE QUESTION
export const getQuestions = async () => {
    const { data } = await supabase.from("questions").select("*");
    return data;
};

// ADD NEW QUESTION [POST]
export const deleteQuestion = async (id: number) => {
    const { data } = await supabase.from("questions").delete().eq("id", id);

    return data;
};
