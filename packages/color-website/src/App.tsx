import { TextField } from "@neetly/ui";
import { clampChroma, formatHex, lch, oklch, xyz50 } from "culori";
import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";

import styles from "./App.module.scss";

type ColorStop = {
  offset: number;
  color: string;
};

const App = () => {
  const [hue, setHue] = useState(0);
  const [chroma, setChroma] = useState(50);

  const colorStops = useMemo(() => {
    const colorStops: ColorStop[] = [];
    for (let offset = 0; offset <= 1; offset += 0.1) {
      const luminance = xyz50(lch({ l: offset * 100 })).y as number;

      const color = oklch({
        l: Math.cbrt(luminance),
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
          label="Chroma (0–100)"
          type="number"
          min={0}
          max={100}
          value={chroma}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChroma(Number(event.target.value));
          }}
        />
      </div>

      <section className={styles.preview}>
        <h2 className={styles.previewName}>Preview</h2>
        <div
          className={styles.previewImage}
          style={{
            "--image": `linear-gradient(to left, ${colorStops
              .map(({ offset, color }) => `${color} ${offset * 100}%`)
              .join(", ")})`,
          }}
        />
      </section>
    </main>
  );
};

export { App };
