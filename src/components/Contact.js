import React, { useState } from "react";

export default function Contact() {
  const [contactData, setContactData]=useState({
    'name': '',
    'email': '',
    'phone': '',
    'describe': '',
    'status': '',
  });
  
  const change=(event)=>{
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value
    });
  }
  const submitForm=()=>{
    const contactFormData=new FormData();
    contactFormData.append('name', contactData.name)
    contactFormData.append('email', contactData.email)
    contactFormData.append('phone', contactData.phone)
    contactFormData.append('describe', contactData.describe)
    fetch('http://127.0.0.1:8000/ask/', {
      mode: 'cors',
  method: 'POST',
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
  },
   body: JSON.stringify({
     // your expected POST request payload goes here
        name: contactData.name,
        email: contactData.email,
        phone:contactData.phone,
        describe: contactData.describe
      })
})
  .then(res => res.json())
  .then(data => {
      // enter you logic when the fetch is successful
      setContactData({
        'name': '',
        'email': '',
        'phone': '',
        'describe': '',
        'status': 'success',
      })
    }
  )
  .catch(error => {
  // enter your logic for when there is an error (ex. error toast)
   console.log(error)
  })
  
  //
  // const axiosPostCall = async () => {
  //   try {
  //     const { data } = await axios.post('http://127.0.0.1:8000/ask/', {
  //       name: contactData.name,
  //       email: contactData.email,
  //       phone:contactData.phone,
  //       describe: contactData.describe
  //     }).then((response)=>{setContactData({
  //         'name':'',
  //         'email': '',
  //         'phone': '',
  //         'describe': '',
  //         'status': 'success',
  //       });
  //     })
  //  // enter you logic when the fetch is successful
  //     console.log("success")
  //
  //   } catch (error) {
  // // enter your logic for when there is an error (ex. error toast)
  //     console.log(`error: `, error)
  //     setContactData({status: 'error'})
  //   }
  // }
  // axiosPostCall()

    // try{
    //   axios.post('http://127.0.0.1:8000/ask/', contactFormData)
    //     .then((response)=>{
    //     setContactData({
    //       'name':'',
    //       'email': '',
    //       'phone': '',
    //       'describe': '',
    //       'status': 'success',
    //     });
    //   })
    // }catch (error){
    //   console.log(error);
    //   // setContactData({'status': 'error'})
    // }
  }
  return (
    <>
      <section className="bg-light py-5">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h2 className="fw-bolder">Get in touch</h2>
            <p className="lead mb-0">We'd love to hear from you</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                  {contactData.status==='success'&&<p className='text-success'>Your query has been sent</p>}
                  {contactData.status==='error'&&<p className='text-danger'>Something went wrong!</p>}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    defaultValue={contactData.name}
                    onChange={change}
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    defaultValue={contactData.email}
                    onChange={change}
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    defaultValue={contactData.phone}
                    onChange={change}
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <!-- Message input--> */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    defaultValue={contactData.describe}
                    onChange={change}
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    {/*To activate this form, sign up at*/}
                    {/*<br />*/}
                    {/*<a href="https://startbootstrap.com/solution/contact-forms">*/}
                    {/*  https://startbootstrap.com/solution/contact-forms*/}
                    {/*</a>*/}
                  </div>
                </div>
                {/* <!-- Submit error message--> */}
                {/* <!----> */}
                {/* <!-- This is what your users will see when there is--> */}
                {/* <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* <!-- Submit Button--> */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-lg"
                    id="submitButton"
                    type="submit"
                    onClick={submitForm}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
