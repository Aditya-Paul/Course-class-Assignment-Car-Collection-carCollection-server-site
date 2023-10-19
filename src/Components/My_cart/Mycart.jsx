import { useLoaderData, } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import CartDetails from "./CartDetails";
import { useState } from "react";


const Mycart = () => {
    const getdata = useLoaderData()
    const [data,setData] = useState(getdata)
    return (
        <div>
            <Navbar></Navbar>
            <div className="my-20">
                {
                    getdata.map(item=><CartDetails key={item._id} value={item} data={data} setData={setData}></CartDetails>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Mycart;