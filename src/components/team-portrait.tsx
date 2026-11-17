"use client";

import Image from "next/image";
import { useState } from "react";

export function TeamPortrait({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((part) => part[0]).join("");

  return (
    <div className={failed ? "team-photo team-photo-fallback" : "team-photo"}>
      {failed ? (
        <div className="portrait-fallback" role="img" aria-label={`Portrait placeholder for ${name}`}>
          <span>{initials}</span>
          <i /><i /><i />
        </div>
      ) : (
        <Image src={src} alt={`Placeholder portrait for ${name}`} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw" unoptimized onError={() => setFailed(true)} />
      )}
    </div>
  );
}
