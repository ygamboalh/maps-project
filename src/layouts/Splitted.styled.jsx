import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #0000FF;
  background: rgba(0, 0, 255, 0.17);

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--light-blue-3);
  border-radius: 0 0 68px 73px;
  padding: 0 2rem;

  @media (max-width: 960px) {
    flex: none;
  }

  @media (min-width: 1025px) {
    width: 50%;
    padding-top: 3rem;
    border-radius: 0000;
    justify-content: start;
    overflow: hidden;
  }

  @media (max-width: 960px) {
    flex: none;
  }
`

export const TicketImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 2.5rem 0 -13px 15px;
  

  @media (min-width: 1025px) {
    width: 40vh;
    bottom: -38px;
    align-self: flex-end;
    position: fixed;
    margin-left: -50px;
  }
`

export const ConfirmImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 0 0 -13px 15px;
  

  @media (min-width: 1025px) {
    width: 40vh;
    bottom: -38px;
    align-self: flex-end;
    position: fixed;
    margin-left: -50px;
  }
`
export const MainSection = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  justify-content: center;
  height: 100%;
  display: grid;
  align-content: center;
  text-align: center;


  @media (min-width: 1025px) {
    width: 50%;
    height: 100vh;
    justify-content: center;
  }
`
