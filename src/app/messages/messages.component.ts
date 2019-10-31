import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //tem que ser publico pq vc vai fazer bind com ela no template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
