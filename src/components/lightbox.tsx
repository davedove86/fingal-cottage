import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

export type Shot = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: Shot[];
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const image = images[index];

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (count < 2) return;
      if (event.key === "ArrowRight") onIndex((index + 1) % count);
      if (event.key === "ArrowLeft") onIndex((index - 1 + count) % count);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [count, index, onClose, onIndex]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-ink/80 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-canvas">
          {index + 1} / {count}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="inline-flex size-11 items-center justify-center rounded-full bg-canvas text-ink"
          aria-label="Close photo"
        >
          <X className="size-5" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-14">
        {count > 1 ? (
          <button
            type="button"
            onClick={() => onIndex((index - 1 + count) % count)}
            className="absolute left-0 z-10 inline-flex size-11 items-center justify-center rounded-full bg-canvas text-ink"
            aria-label="Previous photo"
          >
            <ChevronLeft className="size-5" />
          </button>
        ) : null}
        <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
        {count > 1 ? (
          <button
            type="button"
            onClick={() => onIndex((index + 1) % count)}
            className="absolute right-0 z-10 inline-flex size-11 items-center justify-center rounded-full bg-canvas text-ink"
            aria-label="Next photo"
          >
            <ChevronRight className="size-5" />
          </button>
        ) : null}
      </div>
      <p className="truncate pt-3 text-center text-sm text-canvas">{image.alt}</p>
    </div>
  );
}

export function PhotoButton({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Enlarge ${alt}`}
      className={"block overflow-hidden rounded-xl text-left " + (className ?? "")}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </button>
  );
}

export function useGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  return { index, open: setIndex, close };
}
