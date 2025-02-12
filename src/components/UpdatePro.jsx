import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function UpdatePro() {
	const { user, setUser, updateUserprofile } = useContext(AuthContext);
	const navigate =useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const photo = e.target.PhotoUrl.value;

		updateUserprofile({ photoURL: photo, displayName: name })
		.then(()=> {
			setUser((prv)=>({...prv,photoURL: photo, displayName: name }))
			navigate("/")
		})
		e.target.reset()
	};
	return (
		<div className="hero   min-h-screen">
			<div className="hero-content w-full lg:w-1/3 flex-col lg:flex-row-reverse">
				<div className="card bg-base-100 w-full shadow-2xl animate__animated animate__backInLeft">
					<form className="card-body" onSubmit={handleSubmit}>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="name"
								name="name"
								placeholder="Name"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">PhotoUrl</span>
							</label>
							<input
								type="text"
								name="PhotoUrl"
								placeholder="PhotoUrl"
								className="input input-bordered"
								required
							/>
						</div>

						<div className="form-control mt-6">
							<button className="btn btn-primary">Update Profile</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
