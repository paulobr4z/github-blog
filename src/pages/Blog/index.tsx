import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { Main, PostList } from './styles'

export function Blog() {
  return (
    <div>
      <Header />
      <Main>
        <Profile />
        <SearchBar />
        <PostList>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostList>
      </Main>
    </div>
  )
}
