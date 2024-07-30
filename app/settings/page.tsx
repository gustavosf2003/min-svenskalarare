"use client";
import { useRouter } from "next/navigation";

import { ArrowBendDownLeft } from "@phosphor-icons/react";

import Navbar from "@/components/Navbar";
import SettingsForm from "@/components/settings/Form";
import { useSettings } from "@/hooks/useSettings";

const Settings = () => {
  const router = useRouter();
  const { data, isLoading } = useSettings();

  return (
    <>
      <div className="relative flex flex-col flex-1 w-full h-full">
        <Navbar />
        <div className="justify-center flex-1 w-full h-full min-h-full pt-20 pb-8 mt-3 md:flex gap-8 bg-basePrimary px-7">
          <div className="flex flex-col md:w-1/2 gap-8">
            <div>
              <button
                className="flex items-center -mt-2 text-sm gap-2 hover:opacity-75"
                onClick={() => {
                  router.back();
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
      </div>
    </>
  );
};

export default Settings;
