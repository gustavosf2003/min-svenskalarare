import { WordSourceType } from "@/types/dictionary";

const PronoumComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [
    { title: "Pronoum", form: "nom" },
    { title: "Objekt", form: "ack" },
    { title: "Possessiv ( EN )", form: "poss sg u" },
    { title: "Possessiv ( ETT )", form: "poss sg n" },
    { title: "Plural", form: "poss pl" },
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

export default PronoumComponent;
