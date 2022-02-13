import { icons } from "../../data/icons";
import styles from "./IconsViewer.module.scss";

const IconsViewer = () => {
  return (
    <div className={styles.container}>
      {icons.map((icon) => (
        <div key={icon.id} className={styles.icon}>
          <icon.component className={styles.iconPreview} />
          <span className={styles.iconName}>{formatName(icon.id)}</span>
        </div>
      ))}
    </div>
  );
};

const formatName = (id: string) => {
  return id.replace(/Icon$/, "").replace(/(?<!^)[A-Z]/, " $&");
};

export { IconsViewer };
