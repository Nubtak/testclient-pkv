import { Component, OnInit } from '@angular/core';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  helpContent;

  constructor(
    private helpService: HelpService
  ) { }

  ngOnInit() {
    this.helpContent = this.helpService.getHelpContent();
  }

}