import type { Color } from "../../types/Color";
import { formatColorName } from "../../utils/formatColorName";
import { formatColorValue } from "../../utils/formatColorValue";
import styles from "./PaletteColorViewer.module.scss";

type PaletteColorViewerProps = {
  color: Color;
};

const PaletteColorViewer = ({ color }: PaletteColorViewerProps) => {
  return (
    <div
      className={styles.container}
      style={{ "--color": color.value }}
      title={formatColorName(color) + "\n" + formatColorValue(color)}
    />
  );
};

export { type PaletteColorViewerProps, PaletteColorViewer };
