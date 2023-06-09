import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, Input} from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './adItem';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [appService]
})
export class AppComponent implements OnInit {
  h1 = 'font: 700 2.5em/1 Inter, system-ui; color: red'
  title = 'my-app';
  nav = ['Home', 'About us', 'Services', 'Blogs', 'Contact us']
  name:String = 'Suresh Padhye'
  values = 'Hello there, how are you?'
  phoneNumber = ''
  @Input() isSpecial = true
  firstName: String = '';
  currentCustomer: any = 'Suresh Padhe'
  hello: string = ''

  ads: AdItem[] = []
  constructor(private adService: AdService, private _appService: appService){}

  ngOnInit(): void {
    this.ads = this.adService.getAds()
    this.setCurrentStyles()
    this.hello = this._appService.getApp()
  }

  displayName(name: String) {
    alert(`Hello ${name}, how are you?`)
  }

  onKey(event: any) {
    this.values = 'Hello ' + event.target.value + ', how are you?'
  }

  callPhone(val: any) {
    this.phoneNumber = val
  }
  canSave = true
  isUnchanged = true
  currentStyles: Record<string, string> = {}
  setCurrentStyles() {
    this.currentStyles = {
      'font-style' : this.canSave ? 'italic' : 'normal',
      'font-weight' : this.isUnchanged ? 'bold' : 'normal',
      'font-size' : this.isSpecial ? '24px' : '12px',
    }
  }
}