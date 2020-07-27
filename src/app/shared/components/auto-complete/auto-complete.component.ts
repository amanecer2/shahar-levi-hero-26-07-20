import {Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';


@Component({
  selector: 'sl-auto-complete',
  template: `
    <input
      [(ngModel)]="search"
      [typeahead]="suggestions$"
      [typeaheadAsync]="true"
      [typeaheadItemTemplate]="customTemplate || defaultItemTemplate"

      [typeaheadOptionsLimit]="7"
      [typeaheadMinLength]="2"
      [isAnimated]="true"
      [typeaheadWaitMs]="1000"
      (ngModelChange)="onSearchEventHandler($event)"
      (typeaheadOnSelect)="onSelectedHandler($event)"
      class="form-control"
      [placeholder]="placeholder">

    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      {{ errorMessage }}
    </div>


    <ng-template #defaultItemTemplate let-model="item" let-index="index">
      <div>This is: {{model | json}} Index: {{ index }}</div>
    </ng-template>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoCompleteComponent implements OnInit {

  @Input() search = '';
  @Input() suggestions$: Observable<any>;
  @Input() customTemplate: TemplateRef<any>;
  @Input() errorMessage: string;
  @Input() placeholder = '';

  @Output() onSearchEvent = new EventEmitter<string>();
  @Output() onSelectedEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchEventHandler(str) {
    if (!validator(str)) {
      this.errorMessage = 'only english letters is allowed';
      return;
    }
    this.errorMessage = '';
    this.onSearchEvent.emit(str);
  }

  onSelectedHandler(selected: TypeaheadMatch) {
    this.onSelectedEvent.emit(selected.item);
  }
}

export function validator(text) {
  switch (true) {
    case text === '[object Object]':
    case !/^[a-zA-Z\s]*$/.test(text):
      return false;
  }
  return true;
}
