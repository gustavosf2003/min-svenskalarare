import { WordSourceType } from "@/types/dictionary";

const NounComponent = ({ data }: { data: WordSourceType }) => {
  const nounForms = [
    { title: "Obestämd", form: "sg indef gen" },
    { title: "Bestämd", form: "sg def nom" },
    { title: "Plural", form: "pl indef nom" },
    { title: "Bestämd plural", form: "pl def nom" },
  ];
  return (
    <>
      {nounForms.map((nounForm) => (
        <p key={nounForm.title}>
          {nounForm.title}:{" "}
          {data.WordForms.find((wf) => wf.msd === nounForm.form)?.writtenForm ??
            "-"}
        </p>
      ))}
    </>
  );
};

export default NounComponent;
