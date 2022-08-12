import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Todo from "pages/Todo";
import { util } from "utils";
import Signup from "pages/Signup";
import { AuthProvider } from "components";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {routes.map((route) => (
            <Route key={util.uuid()} {...route}></Route>
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
