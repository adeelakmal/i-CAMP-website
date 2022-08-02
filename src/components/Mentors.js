import React from "react";

function Mentors() {
  return (
    <>
      <div className="lead text-center mt-5">
        <h2 className="fw-bold">OUR SERVICES</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-9 col-md-6 p-5">
            <p className="lead text-black-50 mb-4 fw-normal">
              i-CAMP is a conglomeration of award-winning talent from a variety
              of domains, owing to the multi-faceted nature of institutions.
            </p>
            <p className="lead text-black-50 mb-4 fw-normal">
              We have nurtured two domains extensively,
            </p>
            <p className="lead text-black-50 mb-4 fw-normal">
              <span className="fw-bolder">Business</span> Development &{" "}
              <span className="fw-bolder">Software</span> Development
            </p>
            <p className="lead text-black-50 mb-4 fw-normal">
              We have <span className="fw-bolder">generated</span> revenue in
              the order of <span className="fw-bolder">millions</span> and have
              ensured customer satisfaction, our KPI being our{" "}
              <span className="fw-bolder">low churn</span> rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentors;
