import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import BackgroundForm from '../../assets/background-form.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const LeftContainer = styled.div`
  background: url('${BackgroundLogin}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div`
  background: url('${BackgroundForm}');
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a{
        text-decoration: underline;
        color: #fff
    }
    a:hover{
        color: #9558a6;
    }
  }
`;
export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #fff;
  text-align: center;

  span {
    font-family: 'Road Rage', sans-serif;
    color: #9558a6;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 8px;
        padding: 0 16px;
    }
    label{
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }  
    p{
      font-size: 14px;
      color: #cf3057;
      line-height: 80%;
      font-weight: 600;
      height: 10px;
    }
`;
