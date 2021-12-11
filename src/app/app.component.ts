import { Component } from '@angular/core';
import { NewsEntryComponent } from './news-entry/news-entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackernews_front';
  a = new NewsEntryComponent();
  b = new NewsEntryComponent();
  news_entries : NewsEntryComponent[] = [this.a,this.b,this.b,this.b];
}
