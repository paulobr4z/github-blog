import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { Main } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Main>
        <Profile />
        <SearchBar />
      </Main>
    </div>
  )
}
