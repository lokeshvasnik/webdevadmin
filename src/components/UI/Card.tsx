import Button from "../Button";

const Card = ({ onClick, title }: any) => {
  return (
    <div
      className="my-5 w-72 cursor-pointer rounded-lg bg-[#2a2e35]"
      onClick={onClick}
    >
      <div className="p-3">
        <h2 className="my-5 font-bold text-white">
          I had faced so many challenges while coding a client’s website. It was
        </h2>
        <span dangerouslySetInnerHTML={{ __html: title }} />
        {/* <Label className="mb-2">#Javascript</Label> */}
        <Button bgColor="bg-yellow-400">Javascript</Button>
      </div>
    </div>
  );
};

export default Card;
