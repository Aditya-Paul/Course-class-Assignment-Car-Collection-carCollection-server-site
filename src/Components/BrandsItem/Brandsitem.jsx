import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Iteminfo from "./Iteminfo";

const Brandsitem = () => {
    const items = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>

            {/* slider */}
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/59xd5H4/ad-1.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-[50%]">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/j4m4yp8/ad-2.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/dJ1NFZF/ad3.jpg" className="w-full h-[600px]" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div><h2 className="text-center text-3xl font-semibold text-black bg-slate-500">Brand Items</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 py-10">
                
            {
                items.map(item=><Iteminfo key={item._id} value={item}></Iteminfo>)
            }
            </div>

        </div>
    );
};

export default Brandsitem;