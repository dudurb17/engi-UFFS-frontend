import { StyledLink } from './styles'

type Props = {
  to: string
  children: React.ReactNode
}

export function SidebarLink({ to, children }: Props) {
  return <StyledLink to={to}>{children}</StyledLink>
}
