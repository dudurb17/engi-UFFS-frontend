import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 20px;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  object-fit: cover;
  margin-top: 40px;
`

export const BrandTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
`

export const BrandSubtitle = styled.span`
  font-size: 10px;
`

export const NavTitle = styled.h5`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`
