import { ThesisCard } from "@/components/theses/thesis-card";
import { getAsset } from "@/lib/asset";

export function ThesesSection() {
  const asset = getAsset();

  return (
    <ul className="flex flex-col gap-4 pt-4">
      {asset.theses.map((thesis) => (
        <li key={thesis.id}>
          <ThesisCard thesis={thesis} assetId={asset.id} />
        </li>
      ))}
    </ul>
  );
}
