// src/config/config.ts
interface DevelopmentConfig {
  mockDataDelay: number;
  logLevel: 'debug' | 'info' | 'error';
}

interface ProductionConfig {
  sharePointConfig: {
    siteId: string;
    driveId: string;
    path: string;
  };
  logLevel: 'debug' | 'info' | 'error';
}

interface AppConfig {
  development: DevelopmentConfig;
  production: ProductionConfig;
}

export const config: AppConfig = {
  development: {
    mockDataDelay: 500,
    logLevel: 'debug'
  },
  production: {
    sharePointConfig: {
      siteId: '',  // Will be filled in when moving to production
      driveId: '',
      path: ''
    },
    logLevel: 'error'
  }
};

export const getConfig = (): DevelopmentConfig | ProductionConfig => {
  return process.env.NODE_ENV === 'development'
    ? config.development
    : config.production;
};

export const isDevelopmentConfig = (
  config: DevelopmentConfig | ProductionConfig
): config is DevelopmentConfig => {
  return 'mockDataDelay' in config;
};