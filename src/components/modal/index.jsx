import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/index";
import ModalText from "../modal-text/index";
import ModalButton from "../modal-button/index";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const flip = {
    hidden: {
        transform: "scale(0) rotateX(-360deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotateX(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotateX(360deg)",
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const newspaper = {
    hidden: {
        transform: "scale(0) rotate(720deg)",
        opacity: 0,
        transition: {
            delay: 0.3,
        },
    },
    visible: {
        transform: " scale(1) rotate(0deg)",
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        transform: "scale(0) rotate(-720deg)",
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const badSuspension = {
    hidden: {
        y: "-100vh",
        opacity: 0,
        transform: "scale(0) rotateX(-360deg)",
    },
    visible: {
        y: "-25vh",
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            damping: 15,
            stiffness: 500,
        },
    },
    exit: {
        y: "-100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text, type }) => {
    return (
        <Backdrop onClick={handleClose}>
            {type === "dropIn" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ModalText text={text} />
                    <ModalButton onClick={handleClose} label="Close" />
                </motion.div>
            )}

            {type === "flip" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={flip}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ModalText text={text} />
                    <ModalButton onClick={handleClose} label="Close" />
                </motion.div>
            )}

            {type === "newspaper" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={newspaper}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ModalText text={text} />
                    <ModalButton onClick={handleClose} label="Close" />
                </motion.div>
            )}

            {type === "badSuspension" && (
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal"
                    variants={badSuspension}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <ModalText text={text} />

                    <ModalButton onClick={handleClose} label="Close" />
                </motion.div>
            )}
        </Backdrop>
    );
};

export default Modal;
