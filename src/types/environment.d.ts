export {};

declare global {
     namespace NodeJS {
          interface ProcessEnv {
               REACT_APP_THEFLOW_EMAIL: string;
               REACT_APP_THEFLOW_PASSWORD: string;
          }
     }
}

declare const process: {
     env: {
          REACT_APP_THEFLOW_EMAIL: string;
          REACT_APP_THEFLOW_PASSWORD: string;
     };
};

export {};

declare global {
     interface Window {
          store: any;
     }
}

export type TextProps = {
     text: string;
     showOverlay: boolean;
};
