import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  // from Local State
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  console.log(todos?.data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>

      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>

        {/* <div className="bg-white text-2xl font-semibold p-3 rounded-md flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
