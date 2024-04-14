import { WordSourceType } from "@/types/dictionary";

const VerbComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Infinitiv", form: "inf aktiv" },
    { title: "Presens", form: "pres ind aktiv" },
    { title: "Preteritum", form: "pret ind aktiv" },
    { title: "Supinum", form: "sup aktiv" },
  ];
  return (
    <>
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
    </>
  );
};

export default VerbComponent;
