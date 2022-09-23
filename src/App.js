import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import About from "./Component/Pages/About/About";
import Blogs from "./Component/Pages/Blogs/Blogs";
import Contact from "./Component/Pages/Contact/Contact";
import Projects from "./Component/Pages/Projects/Projects";
import Footer from "./Component/Share/Footer";
import Navbar from "./Component/Share/Navbar";
import SideBar from "./Component/Share/SideBar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <div>
            <div className="w-full text-right">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-circle btn-secondary m-4 swap swap-rotate  drawer-button lg:hidden"
              >
                <input type="checkbox" />
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/blogs" element={<Blogs />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              {/* <Route path="/projectDetails/:id" element={<ProjectDetails></ProjectDetails>}></Route> */}
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-64  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <SideBar />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
