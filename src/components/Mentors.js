import React, { useEffect, useState } from "react";

// const imageUrl = "http://127.0.0.1:8000/media/default.jpg";

function Mentors() {
  const [Mentors, setMentors] = useState([]);
  // const [Img, setImg] = useState();
  //Write fetch logic here.
  const getMentors = async () => {
    const res = await fetch("http://127.0.0.1:8000/mentors/");
    const json = await res.json();
    //console.log(json);
    setMentors(json);
  };
  // const fetchImage = async () => {
  //   const res = await fetch(imageUrl);
  //   const imageBlob = await res.blob();
  //   const imageObjectURL = URL.createObjectURL(imageBlob);
  //   setImg(imageObjectURL);
  // };

  useEffect(() => {
    getMentors();
    // fetchImage();
  }, []);

  return (
    <>
      <div className="lead text-center mt-5">
        <h2 className="fw-bold">OUR MENTORS</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {Mentors.map((mentor) => {
            return (
              <div className="col-9 col-md-6 p-5">
                {/*<img src={Img} alt="icons" />*/}
                <div className="text-center">
                  <img
                    src={mentor.dp}
                    className="img-fluid circle img-thumbnail"
                    alt={`${mentor.name} pic`}
                  />
                </div>
                <h2 className="text-center">{mentor.name}</h2>
                <p className="text-center lead mb-0">{mentor.speciality}</p>
                <p className="text-center">{mentor.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mentors;
