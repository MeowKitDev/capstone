/// <reference types="vite/client" />

type ImportMetaEnvAugmented = import('@julr/vite-plugin-validate-env').ImportMetaEnvAugmented<
  typeof import('../env').default
>;

type ImportMetaEnv = ImportMetaEnvAugmented;

// Now import.meta.env is totally type-safe and based on your `env.ts` schema definition
// You can also add custom variables that are not defined in your schema
/* You can defined type as below, but here we're using validate then we can leverage on env.ts file */
// VITE_PORT: number;
// VITE_API_ENDPOINT: string;
