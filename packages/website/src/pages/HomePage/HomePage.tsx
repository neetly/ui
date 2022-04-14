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
        <NavigationItem name="Icons" link="/icons" />
      </NavigationList>
    </PageLayout>
  );
};

export { HomePage };
