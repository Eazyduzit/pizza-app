import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../shared/types"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "" : ""} text-2xl italic py-2 transition duration-500 hover:text-primary-100`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
