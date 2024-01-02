import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../lib/backend/actions/login";
import { GoogleLogin } from "@react-oauth/google";
import { loginUsingGoogle } from "../lib/backend/actions/login";
import Button from "../components/Button";
import Input from "../components/Input";
import toast from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Mutate question
  const { mutate: useEmailLogin } = useMutation({
    mutationFn: (formData: object) => loginUser(formData),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
      toast.success("Logged In.", {
        position: "bottom-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "bottom-center",
      });
    },
  });

  const { mutate: useGoogleLogin } = useMutation({
    mutationFn: (response: any) => loginUsingGoogle(response),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/");
      toast.success("Logged In.", {
        position: "bottom-center",
      });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "bottom-center",
      });
    },
  });

  const loginHandler = async (formData: any) => {
    useEmailLogin(formData);
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
          <div className="my-5 flex flex-col items-center justify-center space-y-5">
            {/* <p className="delay-10 cursor-pointer rounded-sm  p-2 text-gray-700 transition  hover:bg-yellow-100  hover:font-bold">
              Forgot Password?
            </p> */}
            <Button className="bg-yellow-400 shadow-md hover:bg-yellow-300">
              Login
            </Button>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                useGoogleLogin(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
