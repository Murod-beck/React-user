import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import RouterLayout from "./component/layout/RouterLayout";
import AboutLayout from "./component/layout/AboutLayout";
import AboutDetail from "./component/AboutDetail";
import ContactDetail from "./component/ContactDetail";
import ContactLayout from "./component/layout/ContactLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const routers = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<About />} />
          <Route path=":id" element={<AboutDetail />} />
        </Route>
        <Route path="contact" element={<ContactLayout />}>
          <Route index element={<Contact />} />
          <Route path=":id" element={<ContactDetail />} />
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
