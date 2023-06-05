import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.apps.app',
  appName: 'apps',
  webDir: 'dist/apps',
  server: {
    androidScheme: 'https'
  }
};

export default config;
