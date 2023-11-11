import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useTopic } from "../backend/hooks/useTopic";
import { MagnifyingGlass } from "react-loader-spinner";

interface TopicProps {
  id: number;
  title: string;
}
const Topic = () => {
  const { register, handleSubmit } = useForm();
  const { topics, mutate, deleteMutate, isLoading } = useTopic();

  const onSubmitHandler = (formData: object) => {
    mutate(formData);
  };

  if (isLoading) {
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />;
  }
  return (
    <div>
      <h1 className="my-3  text-2xl font-bold uppercase tracking-widest">
        add new topic
      </h1>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mb-4 w-80 rounded border border-white px-8 pb-8  pt-6 shadow-md"
      >
        <Input placeholder="Enter Title" {...register("title")} />
        <Button type="submit" bgColor="bg-yellow-400" className="mt-5">
          Add
        </Button>
      </form>

      {/* List */}
      <div className="flex flex-wrap">
        {topics?.map((topic: TopicProps) => (
          <Button
            key={topic.id}
            onClick={() => deleteMutate(topic.id)}
            className="mx-2 my-2"
            bgColor="bg-yellow-400"
          >
            {topic.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Topic;
