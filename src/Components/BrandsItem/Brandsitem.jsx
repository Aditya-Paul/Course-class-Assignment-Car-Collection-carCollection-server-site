import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Iteminfo from "./Iteminfo";
import { useEffect, useState } from "react";
import AddProduct from "../Forms/AddProduct";

const Brandsitem = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const items = useLoaderData()
    console.log(items)
    //const notify = () => toast.success('Here is your toast.');
    // let content = ""
    // useEffect(()=>{
    //     setTimeout(() => {
    //         content = Swal.fire("oops!", "You have to add to products first", "error")
    //     }, 10);
    // },[items])

    useEffect(() => {

        if (items) {
            setLoading(false)
        }
    }, [items])

    useEffect(() => {
        items.map(data => setData(data.brandname))
        console.log(data)
    }, [])

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

            <div>

                <h2 className="text-center text-3xl font-semibold text-black bg-white mt-10">Brand Items</h2>
            </div>
            <div className="grid grid-cols-1  gap-4 px-10 py-10">


                {
                    // items.length < 5 ?

                    //     <div>
                    //         {/* {Swal.fire("oops!", "You have to add to products first")} */}
                    //         {
                    //         toast.success('Hello World', {
                    //             duration: 1000,
                    //             position: 'top-center'})
                    //     }
                    //         {/* {alert("add product")} */}
                    //         <h2>Aditya</h2>
                    //     </div>
                    //     :
                    //     items.map(item => <Iteminfo key={item._id} value={item}></Iteminfo>)

                }
                {/* approach 2 */}
                {
                    items.length < 1 ?
                        (
                            <div className="text-center">
                                <h2 className="text-xl">There is no product under brand {data}</h2>

                                <h2 className="text-2xl pt-4">You have to add some product on
                                    <Link to={'/add_product'}>
                                        <span className="text-orange-400 btn">Add Product</span>
                                    </Link>
                                </h2>
                            </div>

                        )
                        :
                        (
                            <div>
                                {
                                    loading ?
                                        <div>
                                            <span className="loading  loading-ball loading-xs"></ span>
                                        </div>

                                        :
                                        <div>
                                            {items.map(item => <Iteminfo key={item._id} value={item}></Iteminfo>)}
                                        </div>
                                }
                            </div>
                        )
                }
            </div>

        </div>
    );
};

export default Brandsitem;