import { forwardRef } from "react";
import { NavLink } from "react-router-dom";


export const TopNavLink = forwardRef((props, ref) => {
    const { href, children } = props;
    return (
        <NavLink
        style={({ isActive }) => {
            return isActive ? { color: "salmon" } : {};
        }}
        to={href}
        >
        {children}
        </NavLink>
    );
  })