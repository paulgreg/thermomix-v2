/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: white;
        background: #413f54;
      `}
    >
      Thermomix Recipes
    </header>
  )
}

export default Header
