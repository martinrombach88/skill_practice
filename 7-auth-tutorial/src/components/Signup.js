import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signup } = useAuth();
	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
					</Form>
					<Form>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
					</Form>
					<Form>
						<Form.Group id="password-confirm">
							<Form.Label>Password-confirm</Form.Label>
							<Form.Control
								type="password-confirm"
								ref={passwordConfirmRef}
								required
							/>
						</Form.Group>
						<Button type="submit" className="w-100">
							Sign up
						</Button>
					</Form>
				</Card.Body>
			</Card>
			{/* here is an example of pure bootstrap styling, using bootstrap classes */}
			<div className="w-100 text-center mt-2">
				Already have an account? Log in
			</div>
		</>
	);
}
