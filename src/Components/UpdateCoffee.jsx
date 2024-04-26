import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(updatedCoffee);

        // send data to the server
        fetch(`https://coffee-store-server-omega-ecru.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="bg-[#F4F3F0] p-20">
            <h2 className="text-3xl font-extrabold">Update Coffee {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row name */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="Coffee Name" name="name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" required />

                    </div>

                </div>
                {/* form row supplier */}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" required />

                    </div>

                </div>
                {/* form row category and details*/}
                <div className="md:flex mb-6 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Category Details" className="input input-bordered w-full" required />

                    </div>

                </div>
                {/* form photo url row */}
                <div className="mb-6">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" required />
                    </div>
                </div>

                <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;

//https://i.ibb.co/JHGzWYt/3.png