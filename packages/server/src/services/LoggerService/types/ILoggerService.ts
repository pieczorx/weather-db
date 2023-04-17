export interface ILoggerService {
  log(...args: unknown[]): void
  scopeLog(scope: string, ...args: unknown[]): void
}
