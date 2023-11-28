import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notify } from "../components/UI/toast";
import { loginUser } from "../backend/Api/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutate question
  const { mutate } = useMutation({
    mutationFn: (formData: object) => loginUser(formData),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
      notify("Logged In");
    },
    onError: (error) => {
      notify(error.message);
    },
  });

  const loginHandler = async (formData: any) => {
    mutate(formData);
  };

  return (
    <div className="h-screen bg-[#434343]">
      <h1 className=" bg-white py-2 text-center text-2xl font-bold uppercase tracking-widest text-black ">
        web dev admin
      </h1>
      <div className="mx-auto my-10 w-96 rounded border bg-white p-10 text-black">
        <div>
          <p className="text-center text-2xl">Hi Admin</p>
        </div>
        <form onSubmit={handleSubmit(loginHandler)}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            {...register("email")}
            className="my-2 border text-black"
          />
          <label htmlFor="email">Password</label>
          <Input
            type="password"
            {...register("password")}
            className="my-2 border text-black"
          />
          <div className="my-5 flex items-center justify-between">
            <p className="delay-10 cursor-pointer rounded-sm  p-2 hover:font-bold text-gray-700  transition  hover:bg-yellow-100">
              Forgot Password?
            </p>
            <Button className="bg-yellow-400 shadow-md hover:bg-yellow-300">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
