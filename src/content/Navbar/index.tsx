type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex flex-between jsutify-content"
  return (
    <nav>
      <div className={`${flexBetween}`}>Navbar</div>
    </nav>
  )
}

export default Navbar
