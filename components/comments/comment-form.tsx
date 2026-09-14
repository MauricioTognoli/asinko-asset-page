"use client";

import { useId, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UserAvatar } from "@/components/user-avatar";

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [value, setValue] = useState("");
  const textareaId = useId();
  const canSubmit = value.trim().length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    onSubmit(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 border-b border-border pb-5"
    >
      <UserAvatar name="usuario" className="mt-1" />

      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor={textareaId} className="sr-only">
          Agregar un comentario
        </label>
        <Textarea
          id={textareaId}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          rows={1}
          placeholder="Escribí tu respuesta..."
          className="min-h-9 resize-none border-0 px-0 py-1.5 text-base shadow-none focus-visible:ring-0 md:text-base"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            size="sm"
            className="rounded-full"
            disabled={!canSubmit}
          >
            Comentar
          </Button>
        </div>
      </div>
    </form>
  );
}
