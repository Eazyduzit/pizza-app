import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import useMediaQuery from "../../hooks/useMediaQuery"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 w-full py-6 bg-primary-200`}>
        {isAboveSmallScreens ? (
          <>
            <div>
              <p className="font-bold">ZZ</p>
            </div>

            <div>
              <p>Meny</p>
            </div>
            <div>
              <p>Bordbestilling</p>
            </div>
            <div>
              <p>Om oss</p>
            </div>
          </>
        ) : (
          <div>
            <Bars3BottomRightIcon className="h-6 w-6" />
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
