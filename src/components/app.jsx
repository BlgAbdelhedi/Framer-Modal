import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useModal from "../hooks/useModal";
import Modal from "../components/modal";

function App() {
  const { modalOpen, close, open } = useModal();
  const [modalType, setModalType] = useState("dropIn");
  const handleType = (e) => setModalType(e.target.value);

  return (
    <>
      <motion.main className="container">
        <div className="box">
          <motion.select className="input" onChange={handleType}>
            <option value="dropIn">Drop in</option>
            <option value="flip">Flip</option>
            <option value="newspaper">Newspaper</option>
            <option value="badSuspension">Bad Suspension</option>
          </motion.select>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
            onClick={open}>
            Launch modal
          </motion.button>
        </div>
      </motion.main>
      <ModalContainer>
        {modalOpen && (
          <Modal modalOpen={modalOpen} text={modalType} type={modalType} handleClose={close} />
        )}
      </ModalContainer>
    </>
  );
}

const Header = () => (
  <motion.h1 className="pink">
    Framer Motion
    <span className="light-blue"> ⚛️ React</span>
  </motion.h1>
);

const SubHeader = ({ text }) => <motion.h2 className="sub-header">{text}</motion.h2>;

const ModalContainer = ({ children, label }) => (
  <AnimatePresence
    initial={false}
    exitBeforeEnter={true}
  >
    {children}
  </AnimatePresence>
);


export default App;