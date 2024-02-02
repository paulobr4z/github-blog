import { ArrowSquareOut } from '@phosphor-icons/react'
import { ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/paulobr4z.png" alt="foto perfil" />
      <div className="content">
        <span className="profile-header">
          <h2>Paulo Braz</h2>
          <a href="https://github.com/paulobr4z">
            GITHUB <ArrowSquareOut size={16} />
          </a>
        </span>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="more-info">
          <p>@paulobr4z</p>
          <p>autonomo</p>
          <p>1k seguidores</p>
        </div>
      </div>
    </ProfileContainer>
  )
}
