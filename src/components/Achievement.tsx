import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateBlog } from "../backend/Api/blogs";
import { useBlog } from "../backend/hooks/useBlog";
import ReactQuill from "react-quill";
import Button from "./Button";
import Card from "./UI/Card";
import "react-quill/dist/quill.snow.css";


const Achievement = () => {
  const { data } = useBlog();
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (id: string, content: string) => {
    searchParams.set("blog", id);
    setSearchParams(searchParams);
    setValue(content);
  };

  const { mutate } = useMutation({
    mutationFn: updateBlog,
  });
  const blogId = searchParams.get("blog");
  const onUpdateHandler = (blogData: string) => {
    const blogDataObj = {
      content: blogData,
      id: blogId,
    };

    mutate(blogDataObj);
  };

  return (
    <>
      <div className="grid grid-flow-col grid-cols-4 gap-40">
        {data?.map((blog) => (
          <Card
            onClick={() => handleClick(blog.id, blog.content)}
            title={blog.content}
          />
        ))}
      </div>
      <div className=" bg-white text-black">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <Button
        onClick={() => onUpdateHandler(value)}
        bgColor="bg-yellow-400"
        className="my-2"
      >
        Upload
      </Button>
    </>
  );
};

export default Achievement;
