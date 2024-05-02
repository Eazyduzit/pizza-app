import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { selectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: selectedPage) => void
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-100 px-10 py-2 hover:bg-primary-100 hover:text-white"
      onClick={() => setSelectedPage(selectedPage.OmOss)}
      href={`${selectedPage.OmOss}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
