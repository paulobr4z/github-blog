import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  position: absolute;
  top: -64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 864px;
  padding: 32px;
  border-radius: 10px;
  background: #0b1b2b;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    a {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 8px;
      color: #3294f8;
    }
  }

  h3 {
    font-size: 24px;
    line-height: 130%;
    margin-top: 20px;
  }

  .actions {
    display: flex;
    gap: 32px;
    margin-top: 8px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #7b96b2;
    }
  }
`
