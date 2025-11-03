import { NavLink } from "react-router-dom";

const WishList = () => {
  return (
    <span className="position-relative">
      <span className="fs-5">♥️</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        2
      </span>
    </span>
  );
};

const CartStatus = () => {
  return (
    <span className="position-relative">
      <span className="fs-5">🛒</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        3
      </span>
    </span>
  );
};

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-4 py-2">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand fw-bold" to="/">
          MyShoppingSite
        </NavLink>

        {/* Search bar */}
        <form
          className="d-flex mx-auto"
          onSubmit={(e) => e.preventDefault()}
          style={{ width: "40%" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search"
          />
        </form>

        {/* Right side items */}
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-outline-secondary">Login</button>

          <NavLink to="/wishlist" className="text-decoration-none text-dark">
            <WishList />
          </NavLink>

          <NavLink to="/cart" className="text-decoration-none text-dark">
            <CartStatus />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
