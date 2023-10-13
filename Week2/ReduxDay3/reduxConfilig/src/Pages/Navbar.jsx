import "../styles.css";
import { NavLink } from "react-router-dom";
let links = [
  { path: "/", title: "Home" },
  { path: "/login", title: "Login" },
  { path: "/todo", title: "Todo" },
  { path: "/counter", title: "Counter" }
];
export const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {links.map((el) => (
        <NavLink
          key={Math.random()}
          style={({ isActive }) =>
            isActive
              ? { textDecoration: "none", color: "red" }
              : { textDecoration: "none", color: "black" }
          }
          to={el.path}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};
