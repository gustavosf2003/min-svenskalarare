import { WordSourceType } from "@/types/dictionary";

const PrepositionComponent = ({ data }: { data: WordSourceType }) => {
  const wordForms = [{ title: "Preposition", form: "invar" }];
  return (
    <>
      {wordForms.map((nounForm) => (
        <p key={nounForm.title}>
          {nounForm.title}:{" "}
          {data.WordForms.find((wf) => wf.msd === nounForm.form)?.writtenForm ??
            "-"}
        </p>
      ))}
    </>
  );
};

export default PrepositionComponent;
