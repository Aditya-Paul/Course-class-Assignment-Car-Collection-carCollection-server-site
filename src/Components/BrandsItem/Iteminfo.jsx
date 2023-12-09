
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


const Iteminfo = ({ value }) => {
    const { _id, name, brandname, photo, price, rateing, types } = value
    console.log(value)
    return (
        <div className="card card-side bg-base-100 shadow-teal-200 shadow-2xl p-4 flex flex-col md:flex-row">

            {/* Image */}
            <div className="card-body items-center justify-center">
                <figure><img src={photo} alt="Movie" className="w-52" /></figure>
            </div>

            {/* Text Content */}
            <div className="card-body items-center justify-center md:ml-4">

                <h2 className="card-title">Model: <span className="text-orange-400 font-semibold">{name}</span></h2>
                <p>Company: <span className="text-green-500 font-light">{brandname}</span></p>
                <p>Price: <span className="text-green-500 font-light">{price}</span></p>
                <p>Type: <span className="text-green-500 font-light">{types}</span></p>
                <div className=" flex gap-2">Rate: <Rating className=" text-center" name="customized-10" defaultValue={rateing} max={10} /></div>

                <div className="md:space-x-3 md:mt-4">
                    <Link to={`/details/${_id}`}><button className="text-green-500 btn shadow-lg shadow-green-300">Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="text-orange-300 btn shadow-lg shadow-orange-300">Update</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Iteminfo;