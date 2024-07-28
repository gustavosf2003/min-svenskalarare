import { useEffect, useState } from "react";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { useToast } from "@/context/toast";
import { WordSourceType } from "@/types/dictionary";

const AdjektivComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Adjektiv", form: "invar" },
    { title: "Adjektiv", form: "pos indef sg u nom" },
    { title: "Plural", form: "pos def sg no_masc nom" },
    { title: "Komparativ", form: "komp nom" },
    { title: "Superlativ", form: "super def no_masc nom" },
  ];
  const [isShowingCopyIndicator, setIsShowingCopyIndicator] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = (e: any) => {
    e.preventDefault();
    try {
      const clipboardData = e.clipboardData;
      const words = wordForms
        .map(
          (wordForm) =>
            data.WordForms.find((wf) => wf.msd === wordForm.form)
              ?.writtenForm ?? "-",
        )
        .join(" - ");
      showToast("success", "Text kopierad till urklipp");
      clipboardData.setData("text/plain", words);
    } catch (error) {
      showToast("error", "Något gick fel. Det gick inte att kopiera texten");
    }
  };

  const exportData = () => {
    document.execCommand("copy");
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsShowingCopyIndicator(true)}
      onMouseLeave={() => setIsShowingCopyIndicator(false)}
      onClick={exportData}
    >
      {isShowingCopyIndicator && (
        <div className="absolute flex justify-center bg-gray-600 rounded-lg p-1.5 -right-2 -top-5">
          <DocumentDuplicateIcon width={16} />
        </div>
      )}
      <table cellPadding="10" className="border border-borderPrimary">
        <thead>
          <tr className="bg-[#383737] text-white">
            {wordForms.map((wordForm) => (
              <th
                key={wordForm.title}
                className="text-center border border-borderPrimary font-medium"
              >
                {wordForm.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border border-borderPrimary">
            {wordForms.map((wordForm) => (
              <td
                key={wordForm.title}
                className="text-center border border-borderPrimary"
              >
                {data.WordForms.find((wf) => wf.msd === wordForm.form)
                  ?.writtenForm ?? "-"}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdjektivComponent;
