import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-100 px-10 py-2 hover:bg-primary-100 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.OmOss)}
      href={`${SelectedPage.OmOss}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
