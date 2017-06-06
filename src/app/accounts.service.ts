import {Injectable, EventEmitter} from '@angular/core';
import {LoggingService} from './logging.service'; //injecting a service into a service


@Injectable()// this is the meta data deeded to inject a service here, only the receiving service needs this
export class AccountsService {
     accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>()

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}