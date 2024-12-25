import * as fs from 'fs';

/**
 * Will returns the environment variables from the machine you can also returns the default property if not found
 * @param name {string}
 * @param def string
 * @returns string
 */
export const getEnv = (name: string, def = ''): string => {
  const upperName = name.toUpperCase();
  const env = process.env[upperName] ?? def;
  if (!env) {
    const envPath = envFile();
    throw new Error(`in ${envPath} file '${upperName}' not found.`);
  }
  return env;
};

/**
 * @warning To load please set {APP_ENV_FILE_PATH=/path/to/file.env} on your machine
 * @returns string
 */
export const envFile = () =>
  process.env['APP_ENV_FILE_PATH'] ?? `${process.env['INIT_CWD']}/.env`;

/**
 * It will load the .env file and set the environment variables
 * @param stage {IAvailableEnv}
 */
export const loadEnv = () => {
  const envFilePath = envFile();

  if (!fs.existsSync(envFilePath)) {
    console.error(`${envFilePath} does not exist.`);
  }
  console.log(`Loading ${envFilePath}`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
  require('dotenv').config({ path: envFilePath, override: true });
};
