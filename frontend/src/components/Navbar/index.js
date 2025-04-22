
import { Link} from "react-router-dom";
import "./index.css";

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-logo">Social-Logo</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Top Users</Link>
        </li>
        <li>
          <Link to="/trending-posts">Trending Posts</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
