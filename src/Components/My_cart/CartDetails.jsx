/* eslint-disable react/prop-types */
import Swal from "sweetalert2";


const CartDetails = ({ value, info, setInfo }) => {
    const { _id, name, photo, price, description } = value
    const handledelete = id => {
        console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-collection-server.vercel.app/carts/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaing = info.filter(item => item._id !== id)
                            setInfo(remaing)
                        }
                    })
            }
        })
    }
    return (

        <div className="border-2 flex flex-col md:flex-row items-center justify-center rounded-xl space-y-28 md:space-y-0 border-r-8 md:border-r-orange-600">
            <div className="w-full relative mt-20 md:mt-2 px-4 md:px-0 flex items-center justify-center">
                <img src={photo} alt="" className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            </div>
            <div className="px-4 md:px-0 flex flex-col justify-center items-center p-4 border-lime-500 border-l-2 rounded-xl">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-xl">{price}</p>
                <p className="text-gray-700 mt-4">{description}</p>
                <button className="btn" onClick={() => handledelete(_id)}>Delete</button>
            </div>
        </div>


    );
};

export default CartDetails;