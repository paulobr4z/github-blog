import styled from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: #112131;
  padding: 32px;
  border-radius: 10px;
  width: 100%;
  max-width: 900px;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    h4 {
      font-size: 20px;
      line-height: 160%;
      max-width: 283px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      line-height: 160%;
    }
  }
`
