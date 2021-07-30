import React from "react";
import PageTitle from "../components/page-title";

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact" />
    <div style={{ height: "100vh", width: "600px", margin: "auto" }}>
      <h1 className="text-center mt-5">Contact US</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{height: "100px"}}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
