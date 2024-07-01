import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
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
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  baseApi;
