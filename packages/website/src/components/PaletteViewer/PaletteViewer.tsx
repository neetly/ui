import { colorGroups } from "../../data/colors";
import { formatColorGroupName } from "../../utils/formatColorGroupName";
import styles from "./PaletteViewer.module.scss";

const PaletteViewer = () => {
  return (
    <div className={styles.container}>
      {colorGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h1 className={styles.groupName}>{formatColorGroupName(group)}</h1>
          <div className={styles.groupColors}>
            {group.colors.map((color) => (
              <button
                key={color.id}
                className={styles.color}
                style={{ "--color": color.value }}
              ></button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export { PaletteViewer };
