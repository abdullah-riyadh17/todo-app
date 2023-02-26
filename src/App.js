import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoTable from "./components/TodoTable/TodoTable";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "todoform",
          element: <TodoForm></TodoForm>,
        },
        {
          path: "todotable",
          element: <TodoTable></TodoTable>,
        },
      ],
    },
    {
      path: "*",
      element: <div>This route is not found</div>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
