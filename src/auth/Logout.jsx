import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const show = useTypedSelector((state) => state.modalLogout);
  function onClose() {
    dispatch({ type: "set", modalLogout: false });
  }

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/");
    onClose();
  };

  return (
    <Transition appear show={show}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex items-center justify-center min-h-full pl-longer6 pr-normal text-center}`}
          >
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-normal md:p-shorter flex flex-col gap-4 md:gap-6 themedBg relative rounded-lg">
                <h2>Выйти из системы?</h2>
                <div className="flex justify-center gap-4 md:gap-6">
                  <button onClick={handleLogout} className="w-[80%] md:w-[30%]">
                    Да
                  </button>
                  <button
                    onClick={onClose}
                    className="w-[80%] md:w-[30%] themedButton"
                  >
                    Нет
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
