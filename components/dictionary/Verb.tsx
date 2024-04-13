import { WordSourceType } from "@/types/dictionary";

const VerbComponent = ({ data }: { data: WordSourceType }) => {
  console.log("Type: verb");
  return (
    <>
      <p>
        Infinitiv:{" "}
        {data.WordForms.find((wf) => wf.msd === "inf aktiv")?.writtenForm}
      </p>
      <p>
        Presens:
        {data.WordForms.find((wf) => wf.msd === "pres ind aktiv")?.writtenForm}
      </p>
      <p>
        Preteritum
        {data.WordForms.find((wf) => wf.msd === "pret ind aktiv")?.writtenForm}
      </p>
      <p>
        Supinum:
        {data.WordForms.find((wf) => wf.msd === "sup aktiv")?.writtenForm}
      </p>
    </>
  );
};

export default VerbComponent;
