import supabase from "../supabase";
export const loginUser = async (formData: any) => {
  const { data, error } = await supabase.auth.signInWithPassword(formData);

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};