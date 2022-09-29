declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_TOKEN: string;
      REACT_APP_API_URL: string;
    }
  }
}

export {};
