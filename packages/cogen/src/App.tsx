import { TextField } from "@neetly/ui";
import { clampChroma, formatHex, oklch } from "culori";
import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";

import styles from "./App.module.scss";

type ColorStop = {
  offset: number;
  color: string;
};

const App = () => {
  const [hue, setHue] = useState(0);
  const [chroma, setChroma] = useState(0);

  const colorStops = useMemo(() => {
    const colorStops: ColorStop[] = [];
    for (let offset = 0; offset <= 1; offset += 0.1) {
      const color = oklch({
        l: offset * 0.85 + 0.15,
        c: (chroma / 100) * 0.3,
        h: hue,
      });

      colorStops.push({
        offset,
        color: formatHex(clampChroma(color, "oklch")),
      });
    }
    return colorStops;
  }, [hue, chroma]);

  return (
    <main className={styles.app}>
      <div className={styles.fields}>
        <TextField
          label="Hue (0–360)"
          type="number"
          min={0}
          max={360}
          value={hue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setHue(Number(event.target.value));
          }}
        />
        <TextField
          label="Chroma (0–)"
          type="number"
          min={0}
          value={chroma}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChroma(Number(event.target.value));
          }}
        />
      </div>

      <div
        className={styles.preview}
        style={{
          "--preview": `linear-gradient(to left, ${colorStops
            .map(({ offset, color }) => `${color} ${offset * 100}%`)
            .join(", ")})`,
        }}
      />
    </main>
  );
};

export { App };
