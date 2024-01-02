import supabase from "../supabase";

// ADD TOPICS
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

// GET TOPICS
export const getTopics = async () => {
  const { data, error } = await supabase.from("topics").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// DELETE TOPIC
export const deleteTopic = async (id: number) => {
  const { data } = await supabase.from("topics").delete().eq("id", id);

  return data;
};
