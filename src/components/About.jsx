import React from "react";
import { SocialIcon } from "react-social-icons";

function About() {
  const imgStyle = {
    width: "450px",
    height: "450px",
    borderRadius: "10%",
    padding: "10px",
    border: "1px solid #bcd3c7",
  };
  return (
    <div>
      <div className="grid">
        <article style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "50%", marginTop: "20px" }}>
            <p>
              <b>Hello, I'm Recep</b>, a fourth-year student studying Computer
              Engineering at Balikesir University. I have a strong passion for
              this field and I'm determined to advance myself by learning and
              growing continuously. I am curious, enthusiastic, and driven.
              Currently, I'm learning JavaScript and Python languages, striving
              to enhance my knowledge in these areas. I am actively engaged in
              studying web design and artificial intelligence. My current goal
              is to further advance myself in these fields. I aim to contribute
              both to my own growth and to any organization I work with by
              pursuing a career I love.
            </p>
            <h5>
              If you are interested, contact me:
              <div className="social">
                <SocialIcon
                  url="https://react-social-icons.com"
                  network="linkedin"
                  href="https://www.linkedin.com/in/recepurkunn/"
                  style={{ height: 35, width: 35, marginRight: 10 }}
                />
                <SocialIcon
                  url="https://react-social-icons.com"
                  network="github"
                  href="https://github.com/Recepurkun"
                  style={{ height: 35, width: 35 }}
                />
              </div>
            </h5>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/Gd7GwDD/image.png"
              alt=""
              style={imgStyle}
            ></img>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
