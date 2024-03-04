import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 296px);
  background-color: #071422;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 48px;
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  gap: 32px;
  width: 100%;
  margin-top: 48px;
  width: 100%;
  max-width: 864px;
`
