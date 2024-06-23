import { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<
  { state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined
>(undefined);

export type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: "addTodo" | "taskComplete";
  payload: TTodo | string;
};

const typeConstant = {
  ADD_TODO: "addTodo",
  TASK_COMPLETE: "taskComplete",
};

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
  switch (action.type) {
    case typeConstant.ADD_TODO:
      return [...currentState, action.payload];

    case typeConstant.TASK_COMPLETE:
      return currentState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    default:
      return currentState;
  }
};

type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {
    state,
    dispatch,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
