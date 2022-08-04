import React from "react";

export default function Hero() {
  const scroll_contact = () => {
    const scrollingElement = document.scrollingElement || document.body;
    // const Footer = querySelector("footer");
    // console.log(scrollingElement.scrollHeight - 1300);
    let Scroll = scrollingElement.scrollHeight-6150;
    scrollingElement.scrollTop = Scroll;
  };
  return (
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8">
            <div className="text-center my-5">
              <h1 className="display-5 fw-bolder text-white mb-2">
                Bridging the gap between Institutions and the Industry
              </h1>
              <p className="lead text-white-50 mb-4">
                We at i-CAMP are massive proponents of professionalism and
                expect each individual in our network to be world-class. We aim
                to create an emblematic aura that exudes supreme confidence in
                our product because we deliver quality
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                {/* <a
                  className="btn btn-primary btn-lg px-4 me-sm-3"
                  href="#features"
                >
                  Get Started
                </a> */}
                <a className="btn btn-outline-light btn-lg px-4" href="#!" onClick={scroll_contact}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
