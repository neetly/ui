import { colorGroups } from "../../data/colors";
import { formatColorGroupName } from "../../utils/formatColorGroupName";
import { PaletteColorViewer } from "../PaletteColorViewer";
import styles from "./PaletteViewer.module.scss";

const PaletteViewer = () => {
  return (
    <div className={styles.container}>
      {colorGroups.map((group) => (
        <div key={group.id} className={styles.group}>
          <div className={styles.groupName}>{formatColorGroupName(group)}</div>
          <div className={styles.groupColors}>
            {group.colors.map((color) => (
              <div key={color.id}>
                <PaletteColorViewer color={color} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { PaletteViewer };
