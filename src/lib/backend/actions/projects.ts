import supabase from "../supabase";
// GET REQUEST FOR ALL THE QUESTION
export const getProjects = async () => {
  const { data: projects } = await supabase.from("projects").select("*");

  return projects;
};

// ADD NEW PROJECT [POST]
export const addProject = async (formData: any) => {
  const imageName = `${Math.random()}-${formData.image[0].name}`.replace(
    "/",
    "",
  );

  const imagePath = `https://bcrrzrjlwxgolregcvam.supabase.co/storage/v1/object/public/project-images/${imageName}`;

  // 1. Create Project

  const { data } = await supabase
    .from("projects")
    .insert([{ ...formData, image: imagePath }]);

  const { image } = formData;

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from("project-images")
    .upload(imageName, image[0]);

  if (storageError) {
    throw new Error(storageError.message);
  }

  return data;
};

// DELETE PROJECT

export const deleteProject = async (id: number) => {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  return error;
};
