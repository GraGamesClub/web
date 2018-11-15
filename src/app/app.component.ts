import {Component, OnInit} from '@angular/core';
import {CustomIconService} from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private customIconService: CustomIconService) {
    this.customIconService.init();
  }

  ngOnInit() { }
}
