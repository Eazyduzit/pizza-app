import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "../../hooks/useMediaQuery"
import { SelectedPage } from "../../shared/types"
import { useState } from "react"
import Link from "./Link"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "" : "bg-secondary-100 drop-shadow"
  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 w-full py-6 bg-primary-200`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link page="ZZ" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            {isAboveSmallScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div></div>
                <div className={`${flexBetween} gap-8`}>
                  <Link page="Meny" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Bord" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link
                    page="Om Oss"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3BottomRightIcon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
