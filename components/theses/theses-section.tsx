import { ContentSection } from "@/components/content-section";
import { ThesisCard } from "@/components/theses/thesis-card";
import { getAsset } from "@/lib/asset";

export function ThesesSection() {
  const { theses } = getAsset();

  return (
    <ContentSection
      id="theses"
      title="Tesis"
      subtitle={`${theses.length} tesis`}
    >
      <ul className="flex flex-col gap-4">
        {theses.map((thesis) => (
          <li key={thesis.id}>
            <ThesisCard thesis={thesis} />
          </li>
        ))}
      </ul>
    </ContentSection>
  );
}
