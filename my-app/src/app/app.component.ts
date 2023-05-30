import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './adItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'my-app';
  nav = ['Home', 'About us', 'Services', 'Blogs', 'Contact us']

  ads: AdItem[] = []
  constructor(private adService: AdService){}

  ngOnInit(): void {
    this.ads = this.adService.getAds()
  }
}