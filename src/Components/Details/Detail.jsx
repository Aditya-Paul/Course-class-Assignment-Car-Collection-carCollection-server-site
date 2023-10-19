import { useLoaderData } from "react-router-dom";

const Detail = () => {
    const getdata = useLoaderData()
    const { name, photo, price, description } = getdata
    const cart = {name, photo, price, description}
    const handleadd = () =>{
        
    }
    // console.log(name)
    return (
        <div className="h-screen flex justify-center items-center  mx-20 ">
            <div className="border-2 grid grid-cols-1 md:grid-cols-2 bg-slate-300 ">
                <div className="w-full relative">
                    <img src={photo} alt="" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col justify-center items-center p-4">
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