import React, { useState } from "react";
import Modal from "./Modal";
import { GrClose } from "react-icons/gr";

export default function Project(props) {
  const { image, title, desc, code, demo } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="main relative rounded-md shadow-lg bg-teal-100 dark:bg-slate-800 p-6">
      <img className="rounded-md" src={image} alt={title} />
      <h3 className="text-center title font-semibold text-lg my-3 text-gray-900 dark:text-gray-200">
        {title}
      </h3>
      <p className="desc text-md text-gray-800 dark:text-gray-400">{desc}</p>
      <button
        onClick={handleOpenModal}
        className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-3"
      >
        View
      </button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <div className="container p-2">
          <div className="flex justify-between items-center w-full">
            <h2 className="sm:text-2xl text-xl font-bold title-font text-gray-900 dark:text-gray-200">
              {title}
            </h2>
            <button
              type="button"
              className="w-auto inline-flex justify-center rounded-full font-bold sm:text-sm"
              onClick={handleCloseModal}
            >
              <GrClose className="text-2xl dark:invert" />
            </button>
          </div>
          <div className="flex flex-col">
            <p className="text-md py-6 text-gray-800 dark:text-gray-400">
              {desc}
            </p>
            <img className="rounded-md" src={image} alt={title} />
            <div className="mt-6 flex gap-x-3 items-center">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
              >
                Demo
              </a>
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
