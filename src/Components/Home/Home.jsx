import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Latest_blogs from "./ExtraSection1/Latest_blogs";
import Customer_service from "./ExtraSection2/Customer_service";
import Navbar from "./Navbar/Navbar";
import BrandsCard from "./BrandsCard/BrandsCard";


const Home = () => {
    const brandsdata = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="text-center bg-gradient-to-r from-neutral-400 to-neutral-600 px-10 py-20">
                <h2 className="text-3xl font-bold text-white">Our Brands option</h2>
                <p className="text-xl text-gray-400">You can choose what you want</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    brandsdata.map(brand=><BrandsCard key={brand._id} card={brand}></BrandsCard>)
                }
                </div>
            </div>
            
                
            
            <Latest_blogs></Latest_blogs>
            <Customer_service></Customer_service>
            <Footer></Footer>
        </div>
    );
};

export default Home;