import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }
        return {
          // url: `/tasks?priority=${priority}`, filter system-1
          url: `/tasks`,
          method: "GET",
          params: params, // filter system-3
          // params: { priority },  filter system-2
        };
      },
      providesTags: ["todo"], // set to catch name
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("Inside base api", data);
        return { url: "/task", method: "POST", body: data };
      },
      invalidatesTags: ["todo"], // invalided to todo catch
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return { url: `/task/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["todo"], // invalided to todo catch
    }),

    updateTodo: builder.mutation({
      query: (options) => {
        console.log("Inside base api", options);
        return {
          url: `/task/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ["todo"], // invalided to todo catch
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = baseApi;
