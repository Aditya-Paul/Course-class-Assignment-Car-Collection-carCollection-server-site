
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const Customer_service = () => {
    return (
        <div className=" min-h-screen bg-cover bg-center bg-no-repeat bg-gray-600 flex flex-col items-center justify-center " >
            <div className="text-center">
                <p className="text-xl text-gray-400">OUR EXPERT TEAM</p>
                <h2 className="text-3xl font-bold text-white">Our Customer Advisor</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-20">

                <div className="card  bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                    <div className="relative">
                        <figure className="px-5 pt-10">
                            <img src="https://i.ibb.co/NWLPD5B/Alice.jpg" alt="Shoes" className="rounded-xl h-56 w-80" />
                        </figure>
                        <div className=" absolute top-[227px] left-[96px] w-1/2 bg-opacity-70 bg-orange-500 space-x-2 text-white p-2 flex justify-center items-center text-2xl">
                            <AiFillFacebook></AiFillFacebook>
                            <AiFillLinkedin></AiFillLinkedin>
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Alice</h2>
                        <p>0123456789</p>
                        <p className="text-orange-500">Alice@gmail.com</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                    <div className="relative">
                        <figure className="px-5 pt-10">
                            <img src="https://i.ibb.co/MNqMgq6/David.png" alt="Shoes" className="rounded-xl h-56 w-80" />
                        </figure>
                        <div className=" absolute top-[227px] left-[96px] w-1/2 bg-opacity-70 bg-orange-500 space-x-2 text-white p-2 flex justify-center items-center text-2xl">
                            <AiFillFacebook></AiFillFacebook>
                            <AiFillLinkedin></AiFillLinkedin>
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">David</h2>
                        <p>0123456789</p>
                        <p className="text-orange-500">David@gmail.com</p>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                    <div className="relative">
                        <figure className="px-5 pt-10">
                            <img src="https://i.ibb.co/x7Lrxpq/Ella.jpg" alt="Shoes" className="rounded-xl h-56 w-80" />
                        </figure>
                        <div className=" absolute top-[227px] left-[96px] w-1/2 bg-opacity-70 bg-orange-500 space-x-2 text-white p-2 flex justify-center items-center text-2xl">
                            <AiFillFacebook></AiFillFacebook>
                            <AiFillLinkedin></AiFillLinkedin>
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Ella</h2>
                        <p>0123456789</p>
                        <p className="text-orange-500">Ella@gmail.com</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                    <div className="relative">
                        <figure className="px-5 pt-10">
                            <img src="https://i.ibb.co/MBNqZrN/gary.jpg" alt="Shoes" className="rounded-xl h-56 w-80" />
                        </figure>
                        <div className=" absolute top-[227px] left-[96px] w-1/2 bg-opacity-70 bg-orange-500 space-x-2 text-white p-2 flex justify-center items-center text-2xl">
                            <AiFillFacebook></AiFillFacebook>
                            <AiFillLinkedin></AiFillLinkedin>
                            <AiFillTwitterCircle></AiFillTwitterCircle>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">gary</h2>
                        <p>0123456789</p>
                        <p className="text-orange-500">gary@gmail.com</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Customer_service;