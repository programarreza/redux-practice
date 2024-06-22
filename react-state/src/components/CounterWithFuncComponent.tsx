import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-yellow-500 m-5 p-5">
      <button
        className="border px-2 bg-gray-400"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
