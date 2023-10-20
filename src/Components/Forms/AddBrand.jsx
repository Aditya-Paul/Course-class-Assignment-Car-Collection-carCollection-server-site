import Navbar from "../Home/Navbar/Navbar";
import {  CiImageOn } from "react-icons/ci";
import { LuType } from "react-icons/lu";

const AddBrand = () => {
    const handleAddBrand = e => {
        e.preventDefault();
        const form = e.target
        const brandname = form.brandname.value
        const photo = form.photo.value
        const user = {brandname, photo}
        console.log( user)
        fetch('https://car-collection-server.vercel.app/brands',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <>
            <Navbar></Navbar>
            <form className="card-body " onSubmit={handleAddBrand}>
                
                {/* Brand Name */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <LuType />
                        <span className="label-text text-pink-300">Brand Name</span>
                    </div>
                    <select id="cars" name="brandname" placeholder="Brand Name" className="bordered border-2 rounded-lg h-12">
                        <option value="Lamborgini">Lamborgini</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Audi">Audi</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Ferrari">Ferrari</option>
                    </select>
                </div>

                {/* Image */}
                <div className="form-control">
                    <div className="flex gap-2 mb-1">
                        <CiImageOn />
                        <span className="label-text text-pink-300">Photo Url</span>
                    </div>
                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6  items-center justify-center">
                    <button type="submit" className="btn bg-green-300 rounded-2xl w-1/2">Add Brand</button>
                </div>
            </form>



        </>
    );
};

export default AddBrand;