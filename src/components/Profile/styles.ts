import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: absolute;
  top: -64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 864px;
  padding: 32px;
  border-radius: 10px;
  background: #0b1b2b;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }

  .profile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    h2 {
      color: #e7edf4;
      font-family: Nunito;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
    }

    a {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 8px;
      color: #3294f8;
      font-family: Nunito;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
      text-transform: uppercase;
    }
  }

  p {
    color: #afc2d4;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }

  .more-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
    margin-top: 24px;
  }
`
