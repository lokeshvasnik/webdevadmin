const DisplayCard = ({ title, amount, className = "" }: any) => {
    return (
        <div className={`border w-60 p-5 rounded-md my-2 ${className}`}>
            <p>{title}</p>
            <p className="font-bold text-3xl mt-2 tracking-widest">{amount}</p>
        </div>
    );
};

export default DisplayCard;
