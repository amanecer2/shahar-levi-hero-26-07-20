import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sl-header',
  template: `
    <div class="row align-item-center">
      <div class="col-6 d-flex  justify-content-start justify-content-md-center align-items-center">
        herolo weather task
      </div>
      <div class="col-6 d-flex justify-content-end justify-content-md-center ">
        <a nbButton  routerLink="/home" routerLinkActive="active">home</a>
        <a nbButton  routerLink="/favorite" routerLinkActive="active">favorite</a>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
      }
      a.active {
        color: red !important;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
