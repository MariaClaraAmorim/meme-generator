import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 3rem 5rem 3rem;
`;

export const Card = styled.div`
  background: #fff;
  width: 550px;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 22px;
    color: #AB43AD;
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Templates = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;

  button {
    background: transparent;
    margin-right: 10px;
    border: 2px solid transparent;

    &.selected {
      border-color: #AB43AD;
    }

    img {
      width: 100px;
      height: 130px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageMemeMaker = styled.img`
width: 300px;
height: 130px;  
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  background: #AB43AD;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 14px;
  border: 2px solid transparent;

  &:hover {
    background: #e67be9;
  }
`;
