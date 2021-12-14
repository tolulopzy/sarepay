import React from "react";
import {Link} from "react-router-dom";

const  Navbar = () => {
    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black py-14 px-28 bg-pink-100">
        <Link to='/' className="p-2 w-max h-max text-sm bg-yellow-400 rounded-lg border border-blue-900 leading-none">
        Sare <br/> pay
        </Link> 
        <div>
            <Link className="p-4" to='/solutions'>
            Our Solutions
            </Link>
            <Link className="p-4" to='/faq'>
            FAQ
            </Link>
            <Link className="p-4" to='/pricing'>
            Pricing
            </Link>
            <Link className="p-4" to='/sign in'>
            Sign In
            </Link>
            <Link className="py-2 px-4 bg-yellow-400 rounded-md" to='/account'>
            Create An Account
            </Link>
        </div>
        </nav>
    )
}

export default Navbar