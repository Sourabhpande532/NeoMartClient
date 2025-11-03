import { NavLink } from "react-router-dom"

export const Cart = () => {
    return (
        <div>
            Cart page
            <NavLink to="*">Demo</NavLink>
            <NavLink to="/wishlist">wishlist</NavLink>
        </div>
    )
}