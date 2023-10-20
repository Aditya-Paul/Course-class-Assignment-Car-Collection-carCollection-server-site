import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Detail = () => {
    const getdata = useLoaderData()
    const { name, photo, price, description } = getdata
    const location = useLocation()
    const navigate = useNavigate()

    const handleadd = () => {
        const cart = { name, photo, price, description }

        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cart),
        })
            .then(res => {
                res.user,
                Swal.fire({
                    title: 'good job',
                    text: 'Enter to My Cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }),
                navigate(location.state ? location.state : '/')
            })
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="h-screen flex justify-center items-center mx-4 md:mx-10 lg:mx-20">
            <div className="border-2 grid grid-cols-1 md:grid-cols-2 bg-slate-300">
                <div className="w-full relative">
                    <img src={photo} alt="" className="absolute mt-[15.5rem] md:mt-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col justify-center items-center text-center p-4 mt-[20rem]  md:mt-0">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-lg">{price}</p>
                    <p className="text-gray-700 mt-4">{description}</p>
                    <button className="btn mt-4" onClick={handleadd}>Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Detail;