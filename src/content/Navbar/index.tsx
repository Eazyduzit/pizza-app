import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid"
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
  const navbarBackground = isTopOfPage ? "" : "bg-primary-200 drop-shadow"
  const navIconBackground = isTopOfPage ? "" : "bg-white"
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-primary-100`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link page="Hjem" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
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
                className={`${navIconBackground} rounded-full bg-primary-200 p-2`}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3BottomRightIcon className="h-6 w-6 hover:text-white transition duration-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveSmallScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-primary-200 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 hover:text-white transition duration-500" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-1xl">
            {/* <Link page="ZZ" selectedPage={selectedPage} setSelectedPage={setSelectedPage} /> */}
            <Link page="Meny" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Bord" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Om Oss" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
