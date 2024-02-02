import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { Main } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Main>
        <Profile />
      </Main>
    </div>
  )
}
