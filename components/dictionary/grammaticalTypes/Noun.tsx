import { WordSourceType } from "@/types/dictionary";

const NounComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Obestämd", form: "sg indef nom" },
    { title: "Bestämd", form: "sg def nom" },
    { title: "Plural", form: "pl indef nom" },
    { title: "Bestämd plural", form: "pl def nom" },
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

export default NounComponent;
