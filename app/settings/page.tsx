"use client";
import { Button } from "@/components/Button";
import { ChatWindow } from "@/components/chat/ChatWindow";
import InfoCard from "@/components/chat/InfoCard";
import Dropdown from "@/components/Dropdown";
import { InputText } from "@/components/InputText";
import Navbar from "@/components/Navbar";
import RangeSlider from "@/components/RangeSlider";
import SelectableBadge from "@/components/SelectableBadge";
import SettingsForm from "@/components/settings/Form";
import TranslatorComponent from "@/components/translator";
import Dictionary from "@/services/dictionary";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Settings = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-full flex-1 flex flex-col relative">
        <Navbar />
        <div className="w-full md:flex gap-8 bg-basePrimary flex-1 h-full min-h-full justify-center pt-20 pb-8 px-7 mt-3">
          <div className="flex  md:w-1/2 flex-col gap-8">
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
