import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lowrate.app',
  appName: 'LowRate',
  webDir: 'www',
  server: {
    url: 'https://lowrate.in',
    cleartext: false
  }
};

export default config;
