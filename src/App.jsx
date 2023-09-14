import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import RouterLayout from "./component/layout/RouterLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AboutLayout from "./component/layout/AboutLayout";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<About />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
