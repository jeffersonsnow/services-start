import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService], //the constructor needs this
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    );
  } //use this instead of initiating the service like the commented out code below

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
    // const service = new LoggingService(); //You'd this would work like this but angular has some easier tools
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
