import { colorGroups } from "../../data/colors";
import { formatColorGroupName } from "../../utils/formatColorGroupName";
import { PaletteColorViewer } from "../PaletteColorViewer";
import styles from "./PaletteViewer.module.scss";

const PaletteViewer = () => {
  return (
    <div className={styles.container}>
      {colorGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h1 className={styles.groupName}>{formatColorGroupName(group)}</h1>
          <div className={styles.groupColors}>
            {group.colors.map((color) => (
              <div key={color.id}>
                <PaletteColorViewer color={color} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export { PaletteViewer };
