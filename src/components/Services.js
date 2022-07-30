import React from "react";

export default function Services() {
  const scroll = () => {
    const scrollingElement = document.scrollingElement || document.body;
    // const Footer = querySelector("footer");
    // console.log(scrollingElement.scrollHeight - 1300);
    let Scroll = scrollingElement.scrollHeight;
    scrollingElement.scrollTop = Scroll;
  };
  return (
    <>
      <section className="bg-light py-5 border-bottom">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">BUSINESS DEVELOPMENT</h2>
            <p className="lead mb-0">I-CAMP | Our Services</p>
          </div>
          <div className="row gx-4 gy-4 justify-content-left">
            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0 mh-100">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Business Plans/Forecasts:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We review the current state of the business, and identify
                      the pain points, value propositions. We then conduct an
                      extensive SWOT analysis
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Design/Editing:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We provide a stream-lined and exhaustive operational
                      structure in Design and Editing. We have expertise in
                      Figma, the Abobe Suite and Davinci Resolve.
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Professional Development:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We empower individuals to be able to join a professional
                      workforce. We cultivate essential skills such as
                      soft-skills, growth mentality, social media, traction
                      generation, and presentationmakin
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Inventory/Dropshipping:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We use cutting-edge software and data-science techniques
                      to manage inventory for our clients
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Event Management:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Due to our multidisciplinary nature, we have created a
                      modular structure that efficiently translates to the
                      events we manage
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Inventory/Dropshipping:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We use cutting-edge software and data-science techniques
                      to manage inventory for our clients
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder">SOFTWARE</h2>
            <p className="lead mb-0">I-CAMP | Our Services</p>
          </div>
          <div className="row gx-4 gy-4 justify-content-center">
            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0 mh-100">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Website Development:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We provide a performant and responsive website that has
                      passed unit-tests. We review each aspect of the site
                      including good practice of HCI elements. We are
                      well-versed in the MERN stack as well as Django
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Mobile App Development:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      We provide a performant and responsive application
                      tailored to the client’s use case, with experience in
                      Swift and Kotlin
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    Customizable Bots:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Our team is experienced creating bot scripts, that allow
                      our clients to automate chats and their day-today customer
                      dealing
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4 ">
              <div className="card custom mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="medium text-uppercase fw-bold p-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    API integration:
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Our team is well-versed in a multitude of APIs and will
                      create either proprietary APIs or use third-party APIs
                      dependent on the use case.
                    </li>
                  </ul>
                  {/*<div className="d-grid">*/}
                  {/*  <a className="btn btn-outline-primary" href="#!">*/}
                  {/*    Contact Us*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-center">
            <div className="col-lg-6 col-xl-4">
              <div className="buttonContact">
                <a
                  className="btn btn-outline-primary"
                  onClick={scroll}
                  href="#!"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
