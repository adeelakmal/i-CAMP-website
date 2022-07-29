import React from "react";

function Features() {

  const style = `
  li::before {
  
    color: red;
    font-weight: bold; 
    display: inline-block; 
    width: 1em; 
    margin-left: -1em; 
  }`;
  
  return (
    <>
      <style>{style}</style>
      {/*Features section */}
      <div className="lead text-center mt-5">
            <h2 className="fw-bold">OUR SERVICES</h2>
          </div>
      <div className="Container">
        <div className="row">
          <div className="col p-5">
            <p  className="lead text-black-50 mb-4 fw-normal">
            i-CAMP is a conglomeration of award-winning talent from a variety of 
            domains, owing to the multi-faceted nature of institutions.
            </p>
            <p className="lead text-black-50 mb-4 fw-normal">
            We have nurtured two domains extensively,
            </p>
            <p className="lead text-black-50 mb-4 fw-normal">
              <span className="fw-bolder">Business</span> Development & <span className="fw-bolder">Software</span> Development 
          </p>
          <p className="lead text-black-50 mb-4 fw-normal">
          We have <span className="fw-bolder">generated</span> revenue in the order of <span className="fw-bolder">millions</span> and have 
          ensured customer satisfaction, our KPI being our <span className="fw-bolder">low churn</span> rate
          </p>
          </div>
        <div className="col">
          <figure>
            <svg viewBox="0 0 63.6619772368 63.6619772368">
              <circle
                className ="pie1"
                cx="31.8309886184"
                cy="31.8309886184"
                r="15.9154943092"
                />
              <circle
                className ="pie2"
                cx="31.8309886184"
                cy="31.8309886184"
                r="15.9154943092"
                />
            </svg>
            
          </figure>
          <div className="lead text-center d-flex justify-content-center mt-2">
            <li className="mx-3">10 in Tech </li>
            <li>17 in Business</li>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Features;
