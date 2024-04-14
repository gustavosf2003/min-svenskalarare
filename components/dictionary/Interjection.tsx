import { WordSourceType } from "@/types/dictionary";

const InterjectionComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [{ title: "Interjection", form: "invar" }];
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

export default InterjectionComponent;
