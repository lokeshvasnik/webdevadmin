import supabase from "../supabase";

// GET REQUEST FOR ALL THE QUESTION
export const getQuestions = async () => {
  const { data, error } = await supabase.from("questions").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// ADD NEW QUESTION [POST]
export const addQuestion = async (formData: object) => {
  const { data, error } = await supabase
    .from("questions")
    .insert([formData])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// DELETE QUESTION
export const deleteQuestion = async (id: number) => {
  const { data } = await supabase.from("questions").delete().eq("id", id);

  return data;
};
