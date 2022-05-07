import React from "react";

export const Contact = () => {
	return (
		<div className="contact">
			<h2 id="Contact">Contact</h2>
			<div className="contact-content">
				<div className="contact-invitation">
					If interested, send an email and I will get back to you as
					soon as possible.
				</div>

				<div className="contact-form" data-theme>
					<form
						className="form-content"
						action="https://formsubmit.co/yassinmoussaouibusiness@gmail.com"
						method="POST"
					>
						<div>
							<p>Name</p>
							<input
								placeholder="John"
								className="form-name"
								type="text"
								name="name"
								required
							/>
						</div>

						<div>
							<p>Email</p>
							<input
								placeholder="youremail@hotmail.com"
								className="form-email"
								type="email"
								name="email"
								required
							/>
						</div>
						<div>
							<p>Message</p>
							<textarea
								maxLength={750}
								placeholder="Message here.."
								name="message"
								cols="30"
								rows="10"
							></textarea>
						</div>

						<button className="form-submit" type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Contact;
