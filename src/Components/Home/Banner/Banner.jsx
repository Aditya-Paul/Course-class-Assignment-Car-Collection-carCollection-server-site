import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white pt-60 " style={{backgroundImage: 'url(https://i.ibb.co/mb4B2Lq/banner.jpg)'}}>
            
            <div className="flex flex-row">
                <div className=" mt-5 mb-5 " >
                    <button ><AiOutlineArrowLeft className="text-6xl"></AiOutlineArrowLeft></button>
                </div>
                <div className=" text-center">
                    <h2 className="text-2xl">POWER.DRIVEN</h2>
                    <h2 className="text-4xl">DBX707</h2>
                </div>
                <div className=" mt-5 mb-5" >
                    <button ><AiOutlineArrowRight className="text-6xl"></AiOutlineArrowRight></button>
                </div>
            </div>
            <div className=" space-x-4">
                <button  className="btn h-20 w-36 text-green-300">Explore</button>
                <button className="btn h-20 w-36 text-black">Configure</button>
            </div>
        </div>
    );
};

export default Banner;