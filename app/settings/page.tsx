"use client";
import { useRouter } from "next/navigation";

import { ArrowBendDownLeft } from "@phosphor-icons/react";

import { Modal } from "@/components/Modal";
import Navbar from "@/components/Navbar";
import SettingsForm from "@/components/settings/Form";
import { useCustomNavigation } from "@/context/NavigationContext";
import { useSettings } from "@/hooks/useSettings";

const Settings = () => {
  const router = useRouter();
  const { data, isLoading } = useSettings();
  const { canGoBack, toRoute, setToRoute } = useCustomNavigation();
  return (
    <div className="relative flex flex-col flex-1 w-full h-full">
      <Navbar />
      <div className="justify-center flex-1 w-full h-full min-h-full gap-8 pt-20 pb-8 mt-3 md:flex bg-basePrimary px-7">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div>
            <button
              aria-label="Tillbaka"
              className="flex items-center gap-2 -mt-2 text-sm hover:opacity-75"
              onClick={() => {
                if (canGoBack) {
                  router.back();
                } else {
                  setToRoute("/");
                }
              }}
            >
              <ArrowBendDownLeft
                weight="regular"
                size={18}
                className="text-[#7c8591]"
              />
              Tillbaka
            </button>
            <h2 className="mt-4 -mb-1 text-3xl font-medium">
              Assistant inställningar
            </h2>
            <p className="text-sm text-gray-400">
              Här kan du konfigurera ditt assistent så att det passar dig.
            </p>
          </div>
          {!isLoading && <SettingsForm defaultValues={data} />}
        </div>
      </div>
      <Modal.Default
        isOpen={toRoute?.length > 0}
        onClose={() => {
          setToRoute(null);
        }}
      >
        <div className="flex flex-col w-full text-gray-700">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-primaryWhite">
              Inställningar
            </h1>
            <button
              aria-label="Stäng"
              type="button"
              className="p-1 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setToRoute(null);
              }}
            >
              <span className="sr-only">Stänger</span>
              <svg viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M7,7 L17,17 M7,17 L17,7"
                />
              </svg>
            </button>
          </div>

          <p className="mb-3 text-gray-500">
            Det finns ändringar som inte har sparats. Är du säker på att du vill
            lämna den här sidan?
          </p>
          <div className="flex justify-end mt-3 space-x-4 text-sm">
            <button
              className="px-4 py-2 text-gray-400 underline"
              onClick={() => {
                setToRoute(null);
              }}
              aria-label="Avbryt"
            >
              Avbtyt
            </button>
            <button
              className="px-4 py-2 text-red-400 underline hover:text-red-700"
              onClick={() => {
                router.push(toRoute);
                setToRoute(null);
              }}
              aria-label="Lämna"
            >
              Lämna
            </button>
          </div>
        </div>
      </Modal.Default>
    </div>
  );
};

export default Settings;
