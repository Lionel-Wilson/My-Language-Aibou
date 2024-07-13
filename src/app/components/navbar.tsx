import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1em",
          marginBottom: "1em",
        }}
      >
        <Link href="/">
          <button style={{ marginRight: "2em" }} className="btn btn-primary">
            Home
          </button>
        </Link>
        <Link href="/search">
          <button className="btn btn-primary">Search</button>
        </Link>
      </div>*/}
      <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/search">Search</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">My Language Aibou</a>
        </div>

        {/* web version*/}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link href="/">Home</Link>
            </li>

            <li className="font-bold">
              <Link href="/search">Language Analysis Hub</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </>
  );
}
