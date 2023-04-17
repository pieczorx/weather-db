import * as chalk from 'chalk'
import {injectable} from 'inversify'
import {ILoggerService} from './types/ILoggerService'

@injectable()
export class LoggerService implements ILoggerService {
  log(...args: unknown[]): void {
    const dateString = this.getFormattedDate(new Date())
    console.log(`[${dateString}]`, ...args)
  }

  scopeLog(scope: string, ...args: unknown[]): void {
    const color = 'blue'
    this.log(`[${chalk[color].bold(scope)}]`, ...args)
  }

  private getFormattedDate(date: Date): string {
    return ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' +
      date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
  }

  private get styler(): unknown {
    return chalk
  }
}
