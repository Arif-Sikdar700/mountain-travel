import React from "react";

export default function Modal() {
	return (
		<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
				<p className="py-4 font-bold text-3xl text-center">Please Try 10:00am - 8:00pm</p>
				<div className="modal-action flex justify-center" >
					<form method="dialog" >
						{/* if there is a button in form, it will close the modal */}
						<button className="btn btn-accent">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
