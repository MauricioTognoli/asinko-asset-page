import Link from "next/link";

export default function AssetContentNotFound() {
  return (
    <div className="flex flex-col items-start gap-3 py-12">
      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        No encontramos ese contenido
      </h1>
      <p className="text-sm text-muted-foreground">
        El posteo o la tesis que buscás no existe o fue movido.
      </p>
      <Link
        href="/"
        className="rounded-sm text-sm font-medium text-brand transition-colors hover:text-brand/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
