import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 864px;
  margin-top: 190px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 100%;
    margin-top: 12px;
    padding: 12px 16px;
    border-radius: 6px;
    border: 1px solid #1c2f41;
    background-color: #040f1a;
    color: #3a536b;
  }

  ::placeholder {
    color: #3a536b;
  }
`
