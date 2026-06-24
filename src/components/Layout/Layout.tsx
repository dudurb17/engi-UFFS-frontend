import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding-top: 40px;
  padding-left: 120px;
  padding-right: 120px;
  background: #f4f4f5;
  color: #18181b;
`

export function Layout() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Container>
  )
}
