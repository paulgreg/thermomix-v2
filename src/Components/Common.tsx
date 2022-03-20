/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Outlet } from "react-router"
import Footer from "./Footer/Footer"
import Main from "./Main"
import Header from "./Header"

const Common = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  )
}

export default Common
