import { WordSourceType } from "@/types/dictionary";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const InterjectionComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [{ title: "Interjection", form: "invar" }];
  const [isShowingCopyIndicator, setIsShowingCopyIndicator] = useState(false);

  useEffect(() => {
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);

  const handleCopy = (e: any) => {
    e.preventDefault();
    const clipboardData = e.clipboardData;
    const words = wordForms
      .map(
        (wordForm) =>
          data.WordForms.find((wf) => wf.msd === wordForm.form)?.writtenForm ??
          "-",
      )
      .join(" - ");

    clipboardData.setData("text/plain", words);
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
        <div className="absolute  flex justify-center bg-gray-600  rounded-lg p-1.5 -right-2 -top-5">
          <DocumentDuplicateIcon width={16} />
        </div>
      )}
      <table cellPadding="10" className="border border-black">
        <thead>
          <tr className="bg-blue-400 text-white font-semibold">
            {wordForms.map((wordForm) => (
              <th
                key={wordForm.title}
                className="text-center border border-black"
              >
                {wordForm.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white text-black border border-black">
            {wordForms.map((wordForm) => (
              <td
                key={wordForm.title}
                className="text-center  border border-black"
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

export default InterjectionComponent;
