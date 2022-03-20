/** @jsxImportSource @emotion/react */
import i18n from "i18next"
import { Language } from "../i18n/i18n"
import { css } from "@emotion/react"

const Preferences = () => {
  const button = css`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `
  return (
    <>
      <button css={button} onClick={() => i18n.changeLanguage(Language.FR)}>
        fr
      </button>
      <button css={button} onClick={() => i18n.changeLanguage(Language.EN)}>
        en
      </button>
    </>
  )
}

export default Preferences
