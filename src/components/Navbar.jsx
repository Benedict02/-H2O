import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Outlet />
    </>
  );
};

export default Navbar;
