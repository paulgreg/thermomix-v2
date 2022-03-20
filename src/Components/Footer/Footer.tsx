/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { Pages } from "../../Pages/Pages"
import FooterButton from "./FooterButton"

const Footer = () => {
  return (
    <footer
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        background: #413f54;
      `}
    >
      <FooterButton page={Pages.HOME} label={"footer.home"} />
      <FooterButton page={Pages.PREFERENCES} label={"footer.prefs"} />
    </footer>
  )
}

export default Footer
