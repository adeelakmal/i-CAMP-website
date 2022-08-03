import React from 'react'

export default function Nav() {
  const scroll_contact = () => {
    const scrollingElement = document.scrollingElement || document.body;
    // const Footer = querySelector("footer");
    // console.log(scrollingElement.scrollHeight - 1300);
    let Scroll = scrollingElement.scrollHeight;
    scrollingElement.scrollTop = Scroll;
  };
  const scroll_top = () => {
    const scrollingElement = document.scrollingElement || document.body;
    // const Footer = querySelector("footer");
    // console.log(scrollingElement.scrollHeight - 1300);
    let Scroll = scrollingElement.scrollHeight-9999;
    scrollingElement.scrollTop = Scroll;
  };
  return (
    <nav className ="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
            <div className ="container px-5">
                <a className ="navbar-brand" href="#!">i-CAMP</a>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className ="navbar-toggler-icon"></span></button>
                <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className ="nav-item"><a className ="nav-link active" onClick={scroll_top} aria-current="page" href="#!">Home</a></li>
                        <li className ="nav-item"><a className ="nav-link" onClick={scroll_top}  href="#!">About</a></li>
                        <li className ="nav-item"><a className ="nav-link" onClick={scroll_contact} href="#!">Contact</a></li>
                    </ul>
                </div>
            </div>
    </nav>
  )
}
