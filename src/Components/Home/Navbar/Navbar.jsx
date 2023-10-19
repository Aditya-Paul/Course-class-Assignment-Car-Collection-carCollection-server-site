import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/Authprovider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, userlogout } = useContext(AuthContext)

    const handlelogout = () => {
        userlogout()
            .then(res => {
                console.log(res.user)
                Swal.fire("Good job!", "You successfully Logged out", "success");
            })
            .catch()
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/add_product'>Add Product</NavLink></li>
        <li><NavLink to='/add_brand'>Add Brand</NavLink></li>
        <li><NavLink to='/my_cart'>My Cart</NavLink></li>
    </>
    return (

        <div className="navbar text-white bg-opacity-60 bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/T11XqJ9/navbar-gra-download.jpg)' }}>
            <div className="bg-opacity-60"></div>
            <div className="navbar-start gap-4">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <div className="flex-row text-green-400">
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                    </label>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img src="https://i.ibb.co/GJhZVhY/car-logo.pnghttps://i.ibb.co/t4NFy5d/car-logo.png" className="w-12 h-12" alt="" />
                    <h2 className=" normal-case text-xl">CarNation</h2>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ?
                        <div className="flex flex-col md:flex-row  items-center gap-2">
                            <h2>{user.displayName}</h2>
                            <div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                            </div>

                            <button className="btn" onClick={handlelogout}><Link to='/'>Logout</Link>
                            </button>
                        </div>
                        :
                        <div className="space-x-3">
                            <button className="btn"><Link to='/login'>Login</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;