import React from "react";
import styled from "styled-components";
import img1 from "./Assets/Blacl_logo.png";
import img2 from "./Assets/media1.jpg";
import { GrStatusGood } from "react-icons/gr";

const SignUpPage = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <LogoHold>
              <Logo src={img1} />
            </LogoHold>
            <SignUpHold>
              <h1>Sign up</h1>
              <p>
                By signing up i agree to the CodeLab <span>Privacy Policy</span>{" "}
                and <span>Terms of Service</span>
              </p>
              <Input type="text" />
              <Button>Sign up</Button>
            </SignUpHold>
          </First>
          <Second>
            <IconHold>
              <Icon src={img2} />
            </IconHold>
            <Desc>
              <h2>Your plan includes</h2>
              <ul>
                <li>
                  {" "}
                  <Gicon style={{ color: "green" }}>
                    <GrStatusGood />
                  </Gicon>{" "}
                  Unlimited tasks and projects
                </li>
                <li>
                  {" "}
                  <Gicon>
                    <GrStatusGood />
                  </Gicon>{" "}
                  Unlimited storage
                </li>
                <li>
                  {" "}
                  <Gicon>
                    <GrStatusGood />
                  </Gicon>{" "}
                  List, Board, and Calendar views
                </li>
              </ul>
              <p>Plus much more...</p>
            </Desc>
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUpPage;

const Gicon = styled.div`
  color: green;
  margin-right: 7px;
`;

const Desc = styled.div`
  li {
    display: flex;
    list-style: none;
    margin-bottom: 10px;
    margin-right: 13px;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  p {
    margin-top: 0px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

const IconHold = styled.div`
  height: 100px;
  width: 100px;
`;

const Button = styled.button`
  width: 600px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #7463f3;
  color: white;
  @media screen and (max-width: 960px) {
    width: 300px;
  }
`;

const Input = styled.input`
  width: 600px;
  height: 50px;
  margin-bottom: 20px;
  border: 1px solid black;
  outline: 0px;
  border-radius: 5px;

  @media screen and (max-width: 960px) {
    width: 300px;
  }
`;

const SignUpHold = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 400px;
  flex-direction: column;
  padding-bottom: 70px;

  h1 {
    font-weight: 500;
  }

  p {
    margin-left: 13px;
    margin-right: 13px;
    @media screen and (max-width: 960px) {
      width: 300px;
    }
  }

  span {
    color: blue;
    text-decoration: underline;
  }
`;

const LogoHold = styled.div`
  width: 130px;
  height: 70px;
  margin-left: 30px;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;

const Second = styled.div`
  width: 30%;
  height: 500px;
  background-color: #f6f6f6;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const First = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 100px 0px 0px 0px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px 1px rgba(218, 218, 218, 0.9);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
