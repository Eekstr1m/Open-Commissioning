export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_UK: string;
      EMAIL_PASS_UK: string;
      EMAIL_UA: string;
      EMAIL_PASS_UA: string;
    }
  }
}
