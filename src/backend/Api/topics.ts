import supabase from "../supabase";

export const addTopic = async (formData: object) => {
  const { data } = await supabase.from("topics").insert([formData]).select();

  return data;
};
