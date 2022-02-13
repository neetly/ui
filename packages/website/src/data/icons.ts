import * as Icons from "@neetly/icons";

import type { Icon } from "../types/Icon";

const icons: readonly Icon[] = Object.entries(Icons) //
  .map(([id, component]) => {
    return {
      id,
      component,
    };
  });

export { icons };
