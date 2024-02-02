import { SearchBarContainer } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <header>
        <strong>Publicações</strong>
        <p>6 publicações</p>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
