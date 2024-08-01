import { Fragment, useEffect, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  title?: string;
};

function ModalDefault({
  isOpen: isOpenProp,
  onClose,
  title,
  children,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  function handleCloseModal() {
    setIsOpen(false);
    setTimeout(onClose, 200);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-200 transform"
              enterFrom="translate-y-10 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition ease-in-out duration-200 transform"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-10 opacity-0"
            >
              <Dialog.Panel className="z-20 w-full overflow-hidden text-left rounded-lg shadow-2xl bg-basePrimary lg:max-w-xl">
                <div className="w-full h-full px-5 py-4 pointer-events-auto">
                  <div className="relative flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="font-serif font-semibold text-gray-300 text:lg lg:text-xl"
                    >
                      {title}
                    </Dialog.Title>
                  </div>
                  <div className="flex w-full h-full">{children}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export const Modal = {
  Default: ModalDefault,
};
