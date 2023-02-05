import { NavLink } from "react-router-dom";

export default function Title({ title, more = false }) {
  return (
    <header className="flex items-center justify-between mb-4">
      <NavLink to={more ?? "#"}>
        {" "}
        <h3 className="text-2xl text-white font-semibold tracking-tighter hover:underline">
          {title}
        </h3>
      </NavLink>

      {more && (
        <NavLink
          className={
            "text-xs font-semibold uppercase text-link hover:underline tracking-wider"
          }
          to={more}
        >
          SEE ALL
        </NavLink>
      )}
    </header>
  );
}
