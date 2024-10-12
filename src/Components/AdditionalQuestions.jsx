
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdditionalQuestions({ addQuestionData }) {
  const [profession, setProfession] = useState("");
  const [interest, setInterest] = useState("");
  const [reference, setReference] = useState("");
  const [otherProfession, setOtherProfession] = useState("");
  const [otherInterest, setOtherInterest] = useState("");
  const [otherReference, setOtherReference] = useState("");
  
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
  
    if (!profession || !interest || !reference) {
      alert("All fields necessary!");
    } else {
      if (profession === "Others") {
        setProfession(otherProfession);
      }
      if (interest === "Others") {
        setInterest(otherInterest);
      }
      if (reference === "Others") {
        setReference(otherReference);
      }
  
      console.log(profession, interest, reference);
  
      addQuestionData(profession, interest, reference);
  
      navigate('/details');
    }
  };
  

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleReferenceChange = (e) => {
    setReference(e.target.value);
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <form onSubmit={submit}>
                <label htmlFor="">
                  <h4>Questions</h4>
                </label>

                <div className="" onChange={handleProfessionChange}>
                  <label htmlFor="q1">
                    <b>1.</b> What is your profession?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="student"
                    autoComplete="off"
                    className=""
                    value="Student"
                  />
                  <label htmlFor="student"> Student</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="sde"
                    autoComplete="off"
                    className=""
                    value="Software Engineer"
                  />
                  <label htmlFor="sde">Driver</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="teacher"
                    autoComplete="off"
                    className=""
                    value="Teacher"
                  />
                  <label htmlFor="teacher"> Teacher</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="others"
                    autoComplete="off"
                    className=""
                    value="Others"
                  />


<label htmlFor="teacher"> Merchant</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="others"
                    autoComplete="off"
                    className=""
                    value="Others"
                  />


                   <label htmlFor="teacher"> Casher</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="others"
                    autoComplete="off"
                    className=""
                    value="Others"
                  />





                   <label htmlFor="teacher"> Policeman</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="others"
                    autoComplete="off"
                    className=""
                    value="Others"
                  />




                  <label htmlFor="others">  Other:</label>
                  <input
                    type="text"
                    id="otherProfession"
                    autoComplete="off"
                    className=""
                    value={otherProfession}
                    onChange={(e) => { setOtherProfession(e.target.value) }}
                  />
                  <hr />
                </div>






                <div className="" onChange={handleInterestChange}>
                  <label htmlFor="q2">
                    <b>2.</b> In what front-end course are you interested?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dsa"
                    autoComplete="off"
                    className=""
                    value="DSA"
                  />
                  <label htmlFor="dsa"> Angular</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="fullstack"
                    autoComplete="off"
                    className=""
                    value="Full Stack Development"
                  />
                  <label htmlFor="fullstack"> Vue</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dataScience"
                    autoComplete="off"
                    className=""
                    value="Data Science"
                  />
                  <label htmlFor="dataScience"> React</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="compeProgramming"
                    autoComplete="off"
                    className=""
                    value="Competitive Programming"
                  />
               
                  <label htmlFor="others"> Other:</label>
                  <input
                    type="text"
                    id="otherInterest"
                    autoComplete="off"
                    className=""
                    value={otherInterest}
                    onChange={(e) => { setOtherInterest(e.target.value) }}
                  />
                  <hr />
                </div>

                <div className="" onChange={handleReferenceChange}>
                  <label htmlFor="q3">
                    <b>3.</b> Where did you hear about us?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="news"
                    autoComplete="off"
                    className=""
                    value="News Paper"
                  />
                  <label htmlFor="news"> News Paper</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="LinkedIn"
                    autoComplete="off"
                    className=""
                    value="LinkedIn"
                  />
                  <label htmlFor="LinkedIn"> LinkedIn</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="Instagram"
                    autoComplete="off"
                    className=""
                    value="Instagram"
                  />
                  <label htmlFor="Instagram"> Instagram</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="others"
                    autoComplete="off"
                    className=""
                    value="Others"
                  />
                  <label htmlFor="others"> Other:</label>
                  <input
                    type="text"
                    id="otherReference"
                    autoComplete="off"
                    className=""
                    value={otherReference}
                    onChange={(e) => { setOtherReference(e.target.value) }}
                  />
                  <br />
                </div>

                <button type="submit" className="">
                  Next
                </button>
              </form>

              <center>
                <span className="">1</span>
                <span className="">
                  <b>2</b>
                </span>
                <span className="">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
