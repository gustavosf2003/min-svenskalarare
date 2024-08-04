import { useEffect, useState } from "react";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { useToast } from "@/context/toast";
import { WordSourceType } from "@/types/dictionary";
import { useCopyToClipboard } from "@/hooks/useCopyText";

const AdverbComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [{ title: "Adverb", form: "invar" }];
  const [isShowingCopyIndicator, setIsShowingCopyIndicator] = useState(false);
  const { showToast } = useToast();
  const { copyToClipboard } = useCopyToClipboard();

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsShowingCopyIndicator(true)}
      onMouseLeave={() => setIsShowingCopyIndicator(false)}
    >
      {isShowingCopyIndicator && (
        <button
          onClick={() =>
            copyToClipboard(
              wordForms
                .map(
                  (wordForm) =>
                    data.WordForms.find((wf) => wf.msd === wordForm.form)
                      ?.writtenForm ?? "-",
                )
                .join(" - "),
            )
          }
          className="absolute flex justify-center bg-gray-600 rounded-lg p-1.5 -right-2 -top-5"
        >
          <DocumentDuplicateIcon width={16} />
        </button>
      )}
      <table cellPadding="10" className="border border-borderPrimary">
        <thead>
          <tr className="bg-[#383737] text-white">
            {wordForms.map((wordForm) => (
              <th
                key={wordForm.title}
                className="text-center border border-borderPrimary"
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

export default AdverbComponent;
