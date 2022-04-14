import {
  NavigationItem,
  NavigationList,
} from "../../components/NavigationList";
import { PageLayout } from "../../components/PageLayout";

const HomePage = () => {
  return (
    <PageLayout>
      <NavigationList>
        <NavigationItem name="Color Palette" link="/palette" />
        <NavigationItem name="Typography" link="/typography" />
        <NavigationItem name="Icons" link="/icons" />
        <NavigationItem name="Components" link="/components" />
      </NavigationList>
    </PageLayout>
  );
};

export { HomePage };
