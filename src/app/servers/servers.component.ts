import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Initial Test Server Name';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(event: Event) {
    // Note: For these events, you seem to be getting the same event object you would get from the native browser event.
    // console.log('logging out click event!', event);
    this.serverCreationStatus = `Server was created! The server's name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    // Note: For these events, you seem to be getting the same event object you would get from the native browser event.
    // console.log('logging out input event!', event);
    const eventTarget = event.target as HTMLInputElement;
    this.serverName = eventTarget.value;
  }
}
