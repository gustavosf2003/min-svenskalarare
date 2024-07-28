"use client";
import { useRouter } from "next/navigation";

import Navbar from "@/components/Navbar";
import SettingsForm from "@/components/settings/Form";

const Settings = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full flex-1 flex flex-col relative">
        <Navbar />
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full justify-center pt-20 pb-8 px-7 mt-3">
          <div className="flex md:w-1/2 flex-col gap-8">
            <div>
              <button
                className="text-sm"
                onClick={() => {
                  router.back();
                }}
              >
                Back
              </button>
              <h2 className="text-2xl font-medium -mb-1">
                Assistant inställningar
              </h2>
              <p>Ändra inställningar för din assistent här</p>
            </div>
            <SettingsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
