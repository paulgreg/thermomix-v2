/** @jsxImportSource @emotion/react */
import React from "react"
import { css } from "@emotion/react"

type Props = {
  children?: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main
      css={css`
        flex-grow: 1;
        background-color: #cee5f2;
        padding: 4px;
      `}
    >
      {children}
    </main>
  )
}

export default Main
