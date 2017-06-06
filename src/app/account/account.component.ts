import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService] //don't put AccountsService in every provider list else you get different unrelating instances
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }
}