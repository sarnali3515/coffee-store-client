import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-omega-ecru.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between w-full p-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="space-y-2">
                    <button className="btn btn-info">View</button>
                    <br />
                    <Link to={`updateCoffee/${_id}`}> <button className="btn btn-success">Edit</button></Link>
                    <br />
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;