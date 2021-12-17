import React from "react";
import {Link} from "react-router-dom";

const  Navbar = () => {
    return(
        <nav className="flex md:hidden justify-between items-center h-16 bg-white text-black py-6 px-4 bg-yellow-100 sm: ">
        <Link to='/' className="p-2 w-max h-max text-sm bg-yellow-400 rounded-lg border border-blue-900 leading-none">
        Sare <br/> Pay
        </Link> 
        <div>
        <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>
        </div>
            {/* <Link className="p-4" to='/solutions'>
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
            </Link> */}
        </div>
        </nav>
    )
}

export default Navbar