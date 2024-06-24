import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white z-50 border-gray-200 dark:bg-pink-950 borbder-b shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-x-10">
            <Button
              data-collapse-toggle="navbar-default"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-transparent"
              onClick={() => {
                setIsMenuOpen((menu) => !menu);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <RxHamburgerMenu size={30} />
            </Button>{" "}
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {/* <img
            src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
            className="h-8"
            alt="plinkoo Logo"
          /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Plinkoo
              </span>
            </Link>
          </div>
        </div>
      </nav>
      {isMenuOpen ? (
        <span
          className="inline-flex justify-around bg-pink-800 rounded-md gap-x-10 mx-5 my-1 shadow-md px-10 py-5 absolute"
          id="navbar-default"
        >
          <Button
            className="bg-transparent mx-4 hover:bg-black"
            onClick={() => navigate("/simulation")}
          >
            Simulation
          </Button>
          <Button
            className="bg-transparent mx-4 hover:bg-black"
            onClick={() => navigate("/game")}
          >
            Game
          </Button>
        </span>
      ) : null}
    </>
  );
};
