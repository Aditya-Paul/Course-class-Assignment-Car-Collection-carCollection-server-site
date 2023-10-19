

const CartDetails = ({value,data,setData}) => {
const {_id,name, photo, price, description} = value
const handledelete =id =>{
    console.log(id)
    fetch(`http://localhost:5000/carts/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.user)
    .then(data=>{
        console.log(data.deletecount)
         const remaining = data.filter(item=>item._id !==id)
         setData(remaining)
    })
}
    return (
        <div className=" grid grid-cols-1 justify-center items-center mx-20 ">
            <div className="border-2 h-[700px] md:h-[300px] grid grid-cols-1 md:grid-cols-2 rounded-xl space-y-4 border-r-8">
                <div className="w-full relative">
                    <img src={photo} alt="" className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-lg">{price}</p>
                    <p className="text-gray-700 mt-4">{description}</p>
                    <button className="btn "onClick={()=>{handledelete(_id)}}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;