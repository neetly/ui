import { VisuallyHidden } from "ariakit";

import { colorGroups } from "../../data/colors";
import styles from "./PaletteViewer.module.scss";

const PaletteViewer = () => {
  return (
    <div className={styles.container}>
      {colorGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h1 className={styles.groupName}>{formatName(group.id)}</h1>
          <div className={styles.groupColors}>
            {group.colors.map((color) => (
              <div key={color.id} className={styles.color}>
                <button
                  className={styles.colorPreview}
                  style={{ "--color": color.value }}
                  title={color.value.toUpperCase()}
                  onClick={() => {
                    void navigator.clipboard.writeText(color.value);
                  }}
                >
                  <VisuallyHidden>Copy to clipboard</VisuallyHidden>
                </button>
                <span className={styles.colorTone}>
                  {formatName(color.tone)}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const formatName = (id: string) => {
  return id
    .split("-")
    .map((token) => {
      return token.replace(/^./u, (char) => {
        return char.toUpperCase();
      });
    })
    .join(" ");
};

export { PaletteViewer };
