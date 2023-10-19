
const BrandsCard = ({ card }) => {
    const { brandname, photo } = card

    const handlesignebrand = () => {
        console.log('dekhi kaj hoy kina')
    }
    return (
        <>
            <div  className="card  bg-base-100 shadow-xl group hover:border-orange-500 hover:border-4">
                <div className="">
                    <figure className="px-5 pt-10">
                        <img src={photo} alt="Shoes" className="rounded-xl h-56 w-80" />
                    </figure>
                    
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl">{brandname}</h2>
                    <button onClick={handlesignebrand} className="btn  text-white bg-green-400 mt-3">Explore Brands</button>
                </div>
            </div>
        </>

    );
};

export default BrandsCard;