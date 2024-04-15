import { WordSourceType } from "@/types/dictionary";

const AdjektivComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Adjektiv", form: "invar" },
    { title: "Adjektiv", form: "pos indef sg u nom" },
    { title: "Plural", form: "pos def sg no_masc nom" },
    { title: "Komparativ", form: "komp nom" },
    { title: "Superlativ", form: "super def no_masc nom" },
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

export default AdjektivComponent;
