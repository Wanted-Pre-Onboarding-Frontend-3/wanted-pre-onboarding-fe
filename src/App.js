import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Todo from "pages/Todo";
import { util } from "utils";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={util.uuid()} {...route}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
