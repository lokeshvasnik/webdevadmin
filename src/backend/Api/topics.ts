import supabase from "../supabase";

export const addTopic = async (formData: object) => {
  const { data, error } = await supabase
    .from("topics")
    .insert([formData])
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getTopics = async () => {
  const { data, error } = await supabase.from("topics").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
