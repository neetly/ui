type Schema = {
  roles: readonly SchemaRole[];
  tones: readonly SchemaTone[];
};

type SchemaRole = {
  id: string;
  hue: number;
  chroma: number;
};

type SchemaTone = {
  id: string;
  lightness: number;
};

export type { Schema, SchemaRole, SchemaTone };
