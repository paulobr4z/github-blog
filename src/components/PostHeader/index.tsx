import { ArrowSquareOut, CaretLeft } from '@phosphor-icons/react'
import { PostHeaderContainer } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <span>
        <a href="">
          <CaretLeft size={18} />
          voltar
        </a>
        <a href="">
          ver no github <ArrowSquareOut size={18} />
        </a>
      </span>
      <h3>JavaScript data types and data structures</h3>
      <div className="actions">
        <a href="">
          <img src="/github-logo.svg" alt="" />
          @paulobraz
        </a>
        <a href="">
          <img src="/calendar.svg" alt="" />
          Há 1 dia
        </a>
        <a href="">
          <img src="/public/chat-circle.svg" alt="" />
          comentários
        </a>
      </div>
    </PostHeaderContainer>
  )
}
