import userIcon from "../../images/user-icon.png";
// import bgImage from "../../images/bg-image.png";

import "./Header.css";
const Header = () => {
  return (
    <header>
      {/* NAVBAR STARTS */}
      <div className="container mx-auto lg:px-24 py-8">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost lg:text-4xl font-bold">
              Delish Delight
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="search-input input input-bordered lg:w-60 w-16 md:w-auto rounded-full px-10"
              />
            </div>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={userIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NAVBAR ENDS */}



      {/* BANNER STARTS */}
      <section className="container mx-auto lg:px-24 min-h-screen text-center">
        <div
          className=" bg-cover bg-no-repeat w-full max-h-full bg-image rounded-xl"
          //   style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className=" lg:px-52 lg:py-32">
            <h1 className=" text-white lg:text-5xl font-extrabold text-center p-8 ">
              Discover an exceptional cooking class tailored for you
            </h1>
            <p className="text-white text-center p-8 ">
              With countless pasta varieties available, essential to select the
              right type for your dish. Long, thin noodles like spaghetti or
              linguine pair perfectly with light sauces, while short pasta
              shapes such as penne or fusilli are ideal for hearty sauces that
              cling to every curve.
            </p>

            <div className="py-4 space-x-6">
              <button className="btn rounded-full lg:text-xl font-semibold bg-[#0BE58A] px-8">
              Explore Now
              </button>
              <button className="btn btn-outline rounded-full text-white px-8">
              Our Feedback.
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* BANNER ENDS */}
    </header>
  );
};

export default Header;
