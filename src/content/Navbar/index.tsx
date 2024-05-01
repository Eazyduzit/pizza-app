import useMediaQuery from "../../hooks/useMediaQuery"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 w-full py-6`}>
        {isAboveSmallScreens ? <div>Navbar</div> : <div>Nav</div>}
      </div>
    </nav>
  )
}

export default Navbar
