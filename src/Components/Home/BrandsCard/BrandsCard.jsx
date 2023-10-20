import { Link } from "react-router-dom";

const BrandsCard = ({ card }) => {
    const { brandname, photo } = card


    return (
        <>
            <Link to={`/${brandname}`}><div className="card  bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                <div className="">
                    <figure className="px-5 pt-10">
                        <img src={photo} alt="Shoes" className="rounded-xl h-56 w-80" />
                    </figure>

                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">{brandname}</h2>

                </div>
            </div></Link>

        </>

    );
};

export default BrandsCard;