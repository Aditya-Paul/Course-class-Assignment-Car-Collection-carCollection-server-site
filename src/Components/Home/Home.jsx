import Footer from "../Footer/Footer";
import Banner from "./Banner/Banner";
import Latest_blogs from "./ExtraSection1/Latest_blogs";
import Customer_service from "./ExtraSection2/Customer_service";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Latest_blogs></Latest_blogs>
            <Customer_service></Customer_service>
            <Footer></Footer>
        </div>
    );
};

export default Home;