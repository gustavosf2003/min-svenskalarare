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
      <div className="w-full h-full flex-1 flex flex-col relative">
        <Navbar />
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full justify-center pt-20 pb-8 px-7 mt-3">
          <div className="flex md:w-1/2 flex-col gap-8">
            <div>
              <button
                className="text-sm flex items-center gap-2 -mt-2 hover:opacity-75"
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
              <h2 className="text-3xl font-medium -mb-1 mt-4">
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
