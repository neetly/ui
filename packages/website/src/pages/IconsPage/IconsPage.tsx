import * as Icons from "@neetly/icons";

import { IconItem, IconList } from "../../components/IconList";
import { PageLayout } from "../../components/PageLayout";

const icons = Object.entries(Icons).map(([name, component]) => {
  return { name, component };
});

const IconsPage = () => {
  return (
    <PageLayout title="Icons">
      <IconList>
        {icons.map((icon) => (
          <IconItem
            key={icon.name}
            name={formatName(icon.name)}
            icon={icon.component}
          />
        ))}
      </IconList>
    </PageLayout>
  );
};

const formatName = (name: string) => {
  return name.replace(/Icon$/, "").replace(/(?<!^)(?=[A-Z])/g, " ");
};

export { IconsPage };
