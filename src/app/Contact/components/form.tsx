"use client";
import React, { useState } from "react";

export const Form = () => {
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.currentTarget;

    const Firstname = target.elements.namedItem("Firstname") as HTMLInputElement;
	const Lastname = target.elements.namedItem("Lastname") as HTMLInputElement;
    const company = target.elements.namedItem("company") as HTMLInputElement;
    const email = target.elements.namedItem("email") as HTMLInputElement;
    const message = target.elements.namedItem("message") as HTMLInputElement;

    const data = {
      firstname: Firstname.value,
	  lastname: Lastname.value,
      company: company.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      setMessageSent(true);
    } catch (error: any) {
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" border-4 border-black rounded-md bg-gray-300 p-10 mx-12"
      > 
	    <h1 className="text-2xl font-bold">Name</h1>
        <section className="grid grid-cols-2">

          <div className="mb-4">
            <label className="label-form" htmlFor="first name">
              <b>First Name:</b>(required)
            </label>
            <input
              id="first name"
              type="text"
              name="first name"
              className="input-form border-black p-1 mx-1 w-2/3"
              required
              minLength={3}
              maxLength={200}
            />
          </div>

          <div className="mb-4">
            <label className="label-form" htmlFor="last name">
              <b>Last Name:</b>(required)
            </label>
            <input
              id="last name"
              type="text"
              name="last name"
              className="input-form border-black p-1 mx-1 w-2/3"
              required
              minLength={3}
              maxLength={200}
            />
          </div>
        </section>

        <div className="mb-4">
          <label className="label-form" htmlFor="company">
            <b>Company:</b>(required)
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className="input-form border-black p-1 w-11/12"
            minLength={2}
            maxLength={200}
          />
        </div>

        <div className="mb-4">
          <label className="label-form" htmlFor="email">
            <b>Email:</b>(required)
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="input-form border-black p-1 w-11/12"
            required
            minLength={2}
            maxLength={200}
          />
        </div>

        <div className="mb-4">
          <label className="label-form " htmlFor="message">
            <b>Message:</b>(required)
          </label>
          <textarea
            id="message"
            name="message"
            className="input-form border-black p-2 w-11/12"
            required
            minLength={20}
            maxLength={2000}
          />
        </div>
        <button
          type="submit"
          className="bg-white rounded-full text-black hover:text-orange hover:bg-blue-light min-w-100 px-5 h-12 border border-slate-300 hover:border-black hover:border-1"
        >
          <b>Send Message</b>
        </button>
      </form>
      {isMessageSent && <p> Message has been Sent</p>}
    </>
  );
};
