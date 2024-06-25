import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-200 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-2 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-2 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment by 5
        </button>
        <h1 className="text-2xl font-semibold px-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-2 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
