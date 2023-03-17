import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-past-conversation',
  templateUrl: './past-conversation.component.html',
  styleUrls: ['./past-conversation.component.scss']
})
export class PastConversationComponent implements OnInit {
  public userName = ""
  constructor(
    private userInfo: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.userName = this.userInfo.getUserName();
  }

}
