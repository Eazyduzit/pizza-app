import useMediaQuery from "../../hooks/useMediaQuery"
import { SelectedPage } from "../../shared/types"
// import ActionButton from "@/shared/ActionButton"
import AnchorLink from "react-anchor-link-smooth-scroll"
import zzP from "../../assets/zzP.jpeg"

import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  return (
    <section id="hjem" className="gap-16 bg-gray-20 py-10 h-full sm:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="sm:flex mx-auto w-5/6 items-center justify-center sm:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Hjem)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 sm:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="sm:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] sm:before:content-evolvetext">
                {/* <img src={zzP} alt="home-pageText" /> */}
                <h1 className="text-4xl font-montserrat">ZZ PIZZA</h1>
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the
              Body Shapes That you Dream of.. Get Your Dream Body Now.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            {/* <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton> */}
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Hjem)}
              href={`#${SelectedPage.Hjem}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center sm:z-10 sm:ml-40 sm:mt-16 sm:justify-items-end">
          <img src={zzP} alt="home-pageGraphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveSmallScreens && (
        <div className="h-[150px] w-full bg-primary-200 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={zzP} alt="redbull-sponsor" />
              <img src={zzP} alt="forbes-sponsor" />
              <img src={zzP} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
