import type { Color } from "../../types/Color";
import styles from "./PaletteColorViewer.module.scss";

type PaletteColorViewerProps = {
  color: Color;
};

const PaletteColorViewer = ({ color }: PaletteColorViewerProps) => {
  return (
    <div
      className={styles.container}
      style={{ "--color": color.color }}
      title={color.color}
    />
  );
};

export { type PaletteColorViewerProps, PaletteColorViewer };
