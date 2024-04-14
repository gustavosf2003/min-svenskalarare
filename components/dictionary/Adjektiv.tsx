import { WordSourceType } from "@/types/dictionary";

const AdjektivComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Adjektiv", form: "pos indef sg u nom" },
    { title: "Plural", form: "pos def sg no_masc nom" },
    { title: "Komparativ", form: "komp nom" },
    { title: "Superlativ", form: "super def no_masc nom" },
  ];
  return (
    <>
      {wordForms.map((wordForm) => (
        <p key={wordForm.title}>
          {wordForm.title}:{" "}
          {data.WordForms.find((wf) => wf.msd === wordForm.form)?.writtenForm ??
            "-"}
        </p>
      ))}
    </>
  );
};

export default AdjektivComponent;
