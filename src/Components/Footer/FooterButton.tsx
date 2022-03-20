/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"
import { Pages } from "../../Pages/Pages"

type Props = {
  label: string
  page: Pages
}

const FooterButton = ({ label, page }: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      <NavLink
        to={page}
        css={css`
          text-decoration: none;
          padding: 10px;
        `}
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "white",
            backgroundColor: isActive ? "#CEE5F2" : "#637081",
          }
        }}
      >
        {t(label)}
      </NavLink>
    </div>
  )
}

export default FooterButton
