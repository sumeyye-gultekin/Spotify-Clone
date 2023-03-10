import Navigation from "./Navbar/Navigation";
import Auth from "./Navbar/Auth";
import { useMatch } from "react-router-dom";
import Search from "./Navbar/Search";

function Navbar() {
  const searcMatch = useMatch("/search");

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />

      {searcMatch && <Search />}

      <Auth />
    </nav>
  );
}

export default Navbar;
