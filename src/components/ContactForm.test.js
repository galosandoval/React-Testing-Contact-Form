import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
  findByLabelText,
  getByTestId,
  findByTestId,
} from "@testing-library/react";
import ContactForm from "./ContactForm";
import { change } from "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<ContactForm />);
});

test("can input and submit info", async () => {
  render(<ContactForm />);

  // find the inputs
  const firstName = screen.getByPlaceholderText(/edd/i)
  const lastName = screen.getByPlaceholderText(/burke/i);
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const message = await screen.findByLabelText(/message/i);
  
  // add text to inputs
  fireEvent.change(firstName, { target: { value: "g" } });
  fireEvent.change(lastName, { target: { value: "g" } });
  fireEvent.change(email, { target: { value: "g@g.com" } });
  fireEvent.change(message, { target: { value: "teehee lol" } });
  
  // find submit button
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  // click the submit button
  fireEvent.click(submitButton)

  // make sure the submitted data renders to the DOM
  expect(screen.getByText(/g/i)).toBeInTheDocument();
});
