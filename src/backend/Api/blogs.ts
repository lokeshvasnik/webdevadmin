import supabase from "../supabase";

export const getBlogs = async () => {
  let { data: blogs, error } = await supabase.from("blogs").select("*");

  if (error) {
    throw new Error(error.message);
  }
  return blogs;
};

export const updateBlog = async (blogsData: any) => {
  const { data, error } = await supabase
    .from("blogs")
    .update(blogsData)
    .eq("id", blogsData.id)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
