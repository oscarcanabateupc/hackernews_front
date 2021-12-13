import { Component, NgModule } from '@angular/core';
import { ContributionsService } from './contribution.service';
import { Contribution } from './contribution';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'hackernews_front';
  contributions : Contribution[] = []

  constructor(private contributionService:ContributionsService){}

  ngOnInit():void {
    this.contributionService.get_contributions().subscribe((contributions) => (this.contributions = contributions));
  }
}
