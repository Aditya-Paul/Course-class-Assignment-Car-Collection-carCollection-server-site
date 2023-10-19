import Swal from "sweetalert2";
import Navbar from "../Home/Navbar/Navbar";
import { AuthContext } from "../../Provider/Authprovider";
import { useContext } from "react";
import Footer from "../Footer/Footer";

const Register = () => {
    const { signup,update} =useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const image = form.photo.value
        console.log(email,password,image)
        if (password.length < 6) {
            Swal.fire("Oops!", "Password must 6 char", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Oops!", "Must have one capital letter", "error");
            return;
        }
        else if (!/[ -/:-@[-`{-~]/.test(password)) {
            Swal.fire("Oops!", "must have one special char", "error");
            return;
        }
        signup(email,password)
        .then(res=>{
            update(name,image)
            .then(res=>{
                Swal.fire("Good job!", "Successfully created user profile", "success");
            })
            
        })
        .catch(error=>{
            Swal.fire("Oops!", `${error}`, "error")
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="" >
                <form className="card-body" onSubmit={handleRegister}>
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

                    <div className="form-control  items-center justify-center">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="Image Url" className="input input-bordered rounded-xl" required />
                    </div>

                    <div className="form-control mt-6  items-center justify-center">
                        <button type="submit" className="btn bg-green-300 rounded-2xl w-32">Register</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;