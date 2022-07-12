import { getColor } from "@neetly/colorspace";
import { TextField } from "@neetly/ui";
import type { ChangeEvent } from "react";
import { useMemo, useState } from "react";

import styles from "./App.module.scss";

type ColorStop = {
  offset: number;
  color: string;
};

const App = () => {
  const [hue, setHue] = useState(0);
  const [chroma, setChroma] = useState(80);
  const [lightness, setLightness] = useState(60);

  const color = useMemo(() => {
    return getColor(hue, chroma, lightness);
  }, [hue, chroma, lightness]);

  const colorStops = useMemo(() => {
    const colorStops: ColorStop[] = [];
    for (let offset = 0; offset <= 1; offset += 0.1) {
      colorStops.push({
        offset,
        color: getColor(hue, chroma, offset * 100),
      });
    }
    return colorStops;
  }, [hue, chroma]);

  return (
    <main className={styles.app}>
      <div className={styles.controller}>
        <TextField
          label="Hue (0–360)"
          type="number"
          min={0}
          max={360}
          value={hue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setHue(clamp(Number(event.target.value), 0, 360));
          }}
        />
        <TextField
          label="Chroma (0–100)"
          type="number"
          min={0}
          max={100}
          value={chroma}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setChroma(clamp(Number(event.target.value), 0, 100));
          }}
        />
        <TextField
          label="Lightness (0–100)"
          type="number"
          min={0}
          max={100}
          value={lightness}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setLightness(clamp(Number(event.target.value), 0, 100));
          }}
        />
        <section className={styles.color}>
          <h2 className={styles.colorLabel}>Color</h2>
          <div className={styles.colorPreview} style={{ "--color": color }} />
          <div className={styles.colorValue}>{color.toUpperCase()}</div>
        </section>
      </div>

      <section className={styles.preview}>
        <h2 className={styles.previewLabel}>Preview</h2>
        <div
          className={styles.previewImage}
          style={{
            "--image": `linear-gradient(to right, ${colorStops
              .map(({ offset, color }) => `${color} ${offset * 100}%`)
              .join(", ")})`,
            "--offset": `${lightness}%`,
          }}
        />
      </section>
    </main>
  );
};

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

export { App };
