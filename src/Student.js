import React, { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    name: "",
    surname:"",
    birthdate:"",
    score:0,
    imageLink:""
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert('submitted!');
    setStudent({
      ...student,
      name: "",
      surname:"",
      birthdate:"",
      score:0,
      imageLink:""
    });
  }

  function handleNameChange(e) {
    setStudent({
      ...student,
      name: e.target.value,
    });
  };
  function handleSurnameChange(e) {
    setStudent({
      ...student,
      surname:  e.target.value
    })
  };
  function handleBirthdateChange(e){
    setStudent({
      ...student,
      birthdate: e.target.value
    })
   };
  function handleScoreChange(e) {
    setStudent({
      ...student,
      score: e.target.value
    })
  }
  function handleImageLinkChange(e) {
    setStudent({
      ...student,
      imageLink: e.target.value
    })
  }

  return (
    <div style={{ display: "flex" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#61dafb",
          display: "inline-block",
          padding: "20px ",
          textAlign: "center",
          margin: "2%",
          borderRadius: "5%",
          boxShadow: "5px 10px blue",
        }}
      >
        <h1 style={{ color: "rgb(31, 66, 141)", fontFamily: "Comic Sans Ms" }}>
          Student Form
        </h1>
        <section style={{ display: "flex", flexDirection: "column" }}>
          <label
            style={{
              display: "inline-block",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              margin: "15px 5px 0 5px",
              textAlign: "left",
              fontSize: "1.5em",
            }}
          >
            Name
          </label>
          <input
            placeholder="enter name"
            onChange={handleNameChange}
            name="name"
            value={student.name}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid gray",
              margin: "5px",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              fontSize: "1.5em",
            }}
          ></input>
          <label
            style={{
              display: "inline-block",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              margin: "15px 5px 0 5px",
              textAlign: "left",
              fontSize: "1.5em",
            }}
          >
            Surname
          </label>
          <input
            placeholder="enter surname"
            onChange={handleSurnameChange}
            name="surname"
            value={student.surname}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid gray",
              margin: "5px",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              fontSize: "1.5em",
            }}
          ></input>
          <label
            style={{
              display: "inline-block",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              margin: "15px 5px 0 5px",
              textAlign: "left",
              fontSize: "1.5em",
            }}
          >
            Birthdate
          </label>
          <input
            onChange={handleBirthdateChange}
            type="date"
            name="date"
            value={student.birthdate}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid gray",
              margin: "5px",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              fontSize: "1.5em",
            }}
          ></input>
          <label
            style={{
              display: "inline-block",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              margin: "15px 5px 0 5px",
              textAlign: "left",
              fontSize: "1.5em",
            }}
          >
            Score
          </label>
          <input
            onChange={handleScoreChange}
            type="number"
            value={student.score}
            name="score"
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid gray",
              margin: "5px",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              fontSize: "1.5em",
            }}
          ></input>
          <label
            style={{
              display: "inline-block",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              margin: "15px 5px 0 5px",
              textAlign: "left",
              fontSize: "1.5em",
            }}
          >
            Image link
          </label>
          <input
            onChange={handleImageLinkChange}
            name="image"
            value={student.imageLink}
            style={{
              padding: "6px",
              borderRadius: "5px",
              border: "1px solid gray",
              margin: "5px",
              fontFamily: "Comic Sans Ms",
              color: "rgb(31, 66, 141)",
              fontSize: "1.5em",
            }}
          ></input>
          <button
            type="Submit"
            style={{
              margin: "5px",
              borderRadius: "5px",
              backgroundColor: "red",
              padding: "10px",
              color: "white",
              fontSize: "1.3em",
            }}
          >
            Submit
          </button>
        </section>
      </form>
      <section
        style={{
          backgroundColor: "#61dafb",
          display: "inline-block",
          padding: "20px ",
          textAlign: "left",
          margin: "2%",
          borderRadius: "5%",
          boxShadow: "5px 10px blue",
          width: "100%",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "2.25em",
            color: "red",
            fontFamily: "Comic Sans Ms",
            textAlign: "center",
          }}
        >
          Info
        </h1>
        <h2 style={{ color: "red", fontFamily: "Comic Sans Ms" }}>Name :</h2>
        <h2 style={{ color: "black", paddingLeft: "30px" }}>{student.name}</h2>
        <h2 style={{ color: "red", fontFamily: "Comic Sans Ms" }}>Surname :</h2>
        <h2 style={{ color: "black", paddingLeft: "30px" }}>{student.surname}</h2>
        <h2 style={{ color: "red", fontFamily: "Comic Sans Ms" }}>
          Birthdate :
        </h2>
        <h2 style={{ color: "black", paddingLeft: "30px" }}>{student.birthdate}</h2>
        <h2 style={{ color: "red", fontFamily: "Comic Sans Ms" }}>Score :</h2>
        <h2 style={{ color: "black", paddingLeft: "30px" }}>{student.score}</h2>
        <img
          style={{
            boxShadow: "5px 10px black",
            borderRadius: "10px",
            position: "absolute",
            top: "25%",
            right: "4%",
            width: "50%",
          }}
          alt="user-img"
          src={student.imageLink}
        ></img>
      </section>
    </div>
  );
}
