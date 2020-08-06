import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
  findByLabelText,
} from "@testing-library/react";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom/extend-expect";

test("renders App without crashing", () => {
  render(<ContactForm />);
});
// find the inputs
const firstName = screen.getByLabelText(/first name/i);
const lastName = screen.findByLabelText(/last name*/i);
const email = screen.findByLabelText(/email*/i);
const message = screen.findByLabelText(/message/i);
// add text to inputs
fireEvent.change(firstName, { target: { value: "g" } });
// find submit button
// click the submit button
// make sure the submitted data renders to the DOM
