import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Observer, of, throwError} from 'rxjs';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {AccuWeatherService} from '../../../../services/accu-weather.service';
import {IAutoComplete} from '../../../../interfaces/auto-complete.interface';
import {NbGlobalLogicalPosition, NbToastrService} from '@nebular/theme';

interface GitHubUserSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubUser[];
}

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  received_events_url: string;
  type: string;
  score: number;
}

@Component({
  selector: 'sl-location-auto-complete',
  template: `
    <p>
      <sl-auto-complete
        [suggestions$]="suggestions$"
        [customTemplate]="itemTemplate"
        [search]="search"
        [placeholder]="'enter location'"
        (onSearchEvent)="search = $event"
        (onSelectedEvent)="onSelectedEvent($event)"
      ></sl-auto-complete>
    </p>

    <ng-template #itemTemplate let-model="item" let-index="index">
      <div>{{model.LocalizedName}}</div>
    </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationAutoCompleteComponent implements OnInit {

  @Input() search = '';
  @Output() onLocationSelected = new EventEmitter<IAutoComplete.RootObject>();

  suggestions$;

  errorMessage = '';
  selectedItem: IAutoComplete.RootObject;

  constructor(private weatherService: AccuWeatherService,
              private toasterService: NbToastrService) {
  }

  ngOnInit(): void {
    this.suggestions$ = new Observable((observer: Observer<string>) => {
      observer.next(this.search);
    }).pipe(
      switchMap((query: string) => {
        if (query) {
          // using github public api to get users by name
          return this.weatherService.getAutoComplete(this.search)
            .pipe(
              tap((data: IAutoComplete.RootObject[]) => {
                if (data.length === 0) {
                  this.toasterService.warning(`could not found ${this.search}`, 'no match');
                }
              }),
              catchError(err => {
                this.toasterService
                  .warning(
                    `the  accuweather server return an error: ${err.statusText}`,
                    'huston we have a problem',
                    {duration: 2000, position: NbGlobalLogicalPosition.TOP_START});
                return of([]);
              })
            );
        }

        return of([]);
      })
    );

  }

  onSelectedEvent(data: IAutoComplete.RootObject) {
    this.selectedItem = data;
    this.search = data.LocalizedName;
    this.onLocationSelected.emit(data);
  }
}
