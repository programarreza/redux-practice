import Container from "@/components/todo/Container";
import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold my-5">My Todos </h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
