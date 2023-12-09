/* eslint-disable no-unused-vars */
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const Login = () => {
    const { googlesignIN,signin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handlelogin = e => {
        e.preventDefault();
        console.log('its working')
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        signin(email,password)
        .then(res=>{
            Swal.fire("Good job!", "Successfully logged in", "success");
            //  navigate(location?.state? location.state: '/')
            // navigate(location.state? location.state : '/')
            navigate(location.state? location.state:'/')
             console.log(res.user)
        })
        .catch(error =>{
            Swal.fire("Oops!", "Please Check email and password again", "error");
            console.error(error)
        })
    }

    const handlegooglelogin = () => {
        console.log('kaj hocche')
        googlesignIN()
            .then(res => {
                console.log(res.user)
                Swal.fire("Good job!", "Successfully logged in", "success");
                

            })
            .catch(error => {
                Swal.fire("Oops!", "Something wrong! try again", "error");
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-3 text-center ">
                <div className="col-span-1 md:col-span-2 " >
                    <h1 className="text-6xl font-medium mt-5">Login To Your Account</h1>
                    <p className="text-2xl mt-5">Login using Social Network</p>

                    <div className=" mt-5 mb-5" >
                        <button className="btn" onClick={handlegooglelogin}><AiFillGooglePlusCircle className="text-4xl"></AiFillGooglePlusCircle></button>
                    </div>

                    <p className="text-2xl mt-5">----or----</p>

                    <form className="card-body " onSubmit={handlelogin}>
                        <div className="form-control  items-center justify-center">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered rounded-xl" required />
                        </div>

                        <div className="form-control  items-center justify-center">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered rounded-xl" required />
                        </div>

                        <div className="form-control mt-6  items-center justify-center">
                            <button type="submit" className="btn bg-green-300 rounded-2xl w-32">Login</button>
                        </div>
                    </form>
                </div>
                <div className=" bg-green-200 flex flex-col justify-center items-center h-screen" >
                    <h2 className="text-2xl">If you are New Here? Register Please</h2>
                    <div className="form-control mt-6  items-center justify-center" >
                        <button className="btn bg-white text-black rounded-2xl w-40"><Link to='/register'>Register</Link></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;