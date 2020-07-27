import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, distinctUntilChanged, filter, switchMap, tap} from 'rxjs/operators';
import {IAutoComplete} from '../interfaces/auto-complete.interface';
import {ICurrentLocationForcast} from '../interfaces/current-location.interface';
import {I5DaysForecast} from '../interfaces/5-days-forcasts.interface';
import {URLS} from '../constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class AccuWeatherService {

  private currentLocation: IAutoComplete.RootObject;

  constructor(private http: HttpClient) {
  }

  setUserCurrentLocation(location: IAutoComplete.RootObject) {
    this.currentLocation = location;
  }
  getUserCurrentLocation() {
    return this.currentLocation;
  }

  getAutoComplete(location: string): Observable<IAutoComplete.RootObject[]> {
     return of(fakeAuto)
   /* return of(location)
      .pipe(
        filter(text => text.length > 2),
        delay(1000),
        distinctUntilChanged(),
        switchMap( res => {
          return this.http.get<IAutoComplete.RootObject[]>(URLS.AUTO_COMPLETE(location))
        })
      );*/
  }

  getCurrentLocation(location: string): Observable<ICurrentLocationForcast.RootObject[]> {
     return of(fakeCurrentLocation)
   /* return of(location)
      .pipe(
        filter(text => text.length > 2),
        delay(1000),
        distinctUntilChanged(),
        switchMap( res => this.http.get<ICurrentLocationForcast.RootObject[]>(URLS.CURRENT_CONDITIONS(location)) ),
        tap(res => {
            debugger
        }),
        catchError((err, _) => {
           debugger
           return throwError(err);
        })

      );*/
  }

  get5DaysForecast(location: string): Observable<I5DaysForecast.RootObject> {
    return of(fake5DaysForecasts)
   /* return of(location)
      .pipe(
        filter(text => text.length > 2),
        delay(1000),
        distinctUntilChanged(),
        switchMap( res => this.http.get<I5DaysForecast.RootObject>(URLS.FIVE_DAYS_DAILY_FORCASTS(location)))
      );*/
  }
}

export const fakeLocactionKey = '215854'; // tel aviv!;

export const fakeAuto: IAutoComplete.RootObject | any = [
  {
    'Version': 1,
    'Key': '215854',
    'Type': 'City',
    'Rank': 31,
    'LocalizedName': 'Tel Aviv',
    'Country': {
      'ID': 'IL',
      'LocalizedName': 'Israel'
    },
    'AdministrativeArea': {
      'ID': 'TA',
      'LocalizedName': 'Tel Aviv'
    }
  },
  {
    'Version': 1,
    'Key': '3431644',
    'Type': 'City',
    'Rank': 45,
    'LocalizedName': 'Telanaipura',
    'Country': {
      'ID': 'ID',
      'LocalizedName': 'Indonesia'
    },
    'AdministrativeArea': {
      'ID': 'JA',
      'LocalizedName': 'Jambi'
    }
  },
  {
    'Version': 1,
    'Key': '300558',
    'Type': 'City',
    'Rank': 45,
    'LocalizedName': 'Telok Blangah New Town',
    'Country': {
      'ID': 'SG',
      'LocalizedName': 'Singapore'
    },
    'AdministrativeArea': {
      'ID': '05',
      'LocalizedName': 'South West'
    }
  },
  {
    'Version': 1,
    'Key': '325876',
    'Type': 'City',
    'Rank': 51,
    'LocalizedName': 'Telford',
    'Country': {
      'ID': 'GB',
      'LocalizedName': 'United Kingdom'
    },
    'AdministrativeArea': {
      'ID': 'TFW',
      'LocalizedName': 'Telford and Wrekin'
    }
  },
  {
    'Version': 1,
    'Key': '169072',
    'Type': 'City',
    'Rank': 51,
    'LocalizedName': 'Telavi',
    'Country': {
      'ID': 'GE',
      'LocalizedName': 'Georgia'
    },
    'AdministrativeArea': {
      'ID': 'KA',
      'LocalizedName': 'Kakheti'
    }
  },
  {
    'Version': 1,
    'Key': '230611',
    'Type': 'City',
    'Rank': 51,
    'LocalizedName': 'Telsiai',
    'Country': {
      'ID': 'LT',
      'LocalizedName': 'Lithuania'
    },
    'AdministrativeArea': {
      'ID': 'TE',
      'LocalizedName': 'Telšiai'
    }
  },
  {
    'Version': 1,
    'Key': '2723742',
    'Type': 'City',
    'Rank': 55,
    'LocalizedName': 'Telégrafo',
    'Country': {
      'ID': 'BR',
      'LocalizedName': 'Brazil'
    },
    'AdministrativeArea': {
      'ID': 'PA',
      'LocalizedName': 'Pará'
    }
  },
  {
    'Version': 1,
    'Key': '186933',
    'Type': 'City',
    'Rank': 55,
    'LocalizedName': 'Tela',
    'Country': {
      'ID': 'HN',
      'LocalizedName': 'Honduras'
    },
    'AdministrativeArea': {
      'ID': 'AT',
      'LocalizedName': 'Atlántida'
    }
  },
  {
    'Version': 1,
    'Key': '3453754',
    'Type': 'City',
    'Rank': 55,
    'LocalizedName': 'Telaga Asih',
    'Country': {
      'ID': 'ID',
      'LocalizedName': 'Indonesia'
    },
    'AdministrativeArea': {
      'ID': 'JB',
      'LocalizedName': 'West Java'
    }
  },
  {
    'Version': 1,
    'Key': '3453755',
    'Type': 'City',
    'Rank': 55,
    'LocalizedName': 'Telagamurni',
    'Country': {
      'ID': 'ID',
      'LocalizedName': 'Indonesia'
    },
    'AdministrativeArea': {
      'ID': 'JB',
      'LocalizedName': 'West Java'
    }
  }
];
export const fakeCurrentLocation: ICurrentLocationForcast.RootObject[] | any = [
  {
    'LocalObservationDateTime': '2020-07-26T13:10:00+03:00',
    'EpochTime': 1595758200,
    'WeatherText': 'Sunny',
    'WeatherIcon': 1,
    'HasPrecipitation': false,
    'PrecipitationType': null,
    'IsDayTime': true,
    'Temperature': {
      'Metric': {
        'Value': 31.9,
        'Unit': 'C',
        'UnitType': 17
      },
      'Imperial': {
        'Value': 89,
        'Unit': 'F',
        'UnitType': 18
      }
    },
    'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
  }
];
export const fake5DaysForecasts: any = {
  'Headline': {
    'EffectiveEpochDate': 1595782800,
    'Severity': 7,
    'Text': 'Warm Sunday night',
    'Category': 'heat',
    'EndDate': '2020-07-27T08:00:00+03:00',
    'EndEpochDate': 1595826000,
    'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us',
    'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
  },
  'DailyForecasts': [
    {
      'Date': '2020-07-26T07:00:00+03:00',
      'EpochDate': 1595736000,
      'Temperature': {
        'Minimum': {
          'Value': 78,
          'Unit': 'F',
          'UnitType': 18
        },
        'Maximum': {
          'Value': 91,
          'Unit': 'F',
          'UnitType': 18
        }
      },
      'Day': {
        'Icon': 1,
        'IconPhrase': 'Sunny',
        'HasPrecipitation': false
      },
      'Night': {
        'Icon': 35,
        'IconPhrase': 'Partly cloudy',
        'HasPrecipitation': false
      },
      'Sources': [
        'AccuWeather'
      ],
      'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
    },
    {
      'Date': '2020-07-27T07:00:00+03:00',
      'EpochDate': 1595822400,
      'Temperature': {
        'Minimum': {
          'Value': 78,
          'Unit': 'F',
          'UnitType': 18
        },
        'Maximum': {
          'Value': 89,
          'Unit': 'F',
          'UnitType': 18
        }
      },
      'Day': {
        'Icon': 2,
        'IconPhrase': 'Mostly sunny',
        'HasPrecipitation': false
      },
      'Night': {
        'Icon': 34,
        'IconPhrase': 'Mostly clear',
        'HasPrecipitation': false
      },
      'Sources': [
        'AccuWeather'
      ],
      'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
    },
    {
      'Date': '2020-07-28T07:00:00+03:00',
      'EpochDate': 1595908800,
      'Temperature': {
        'Minimum': {
          'Value': 79,
          'Unit': 'F',
          'UnitType': 18
        },
        'Maximum': {
          'Value': 89,
          'Unit': 'F',
          'UnitType': 18
        }
      },
      'Day': {
        'Icon': 2,
        'IconPhrase': 'Mostly sunny',
        'HasPrecipitation': false
      },
      'Night': {
        'Icon': 33,
        'IconPhrase': 'Clear',
        'HasPrecipitation': false
      },
      'Sources': [
        'AccuWeather'
      ],
      'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
    },
    {
      'Date': '2020-07-29T07:00:00+03:00',
      'EpochDate': 1595995200,
      'Temperature': {
        'Minimum': {
          'Value': 77,
          'Unit': 'F',
          'UnitType': 18
        },
        'Maximum': {
          'Value': 89,
          'Unit': 'F',
          'UnitType': 18
        }
      },
      'Day': {
        'Icon': 1,
        'IconPhrase': 'Sunny',
        'HasPrecipitation': false
      },
      'Night': {
        'Icon': 34,
        'IconPhrase': 'Mostly clear',
        'HasPrecipitation': false
      },
      'Sources': [
        'AccuWeather'
      ],
      'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
    },
    {
      'Date': '2020-07-30T07:00:00+03:00',
      'EpochDate': 1596081600,
      'Temperature': {
        'Minimum': {
          'Value': 77,
          'Unit': 'F',
          'UnitType': 18
        },
        'Maximum': {
          'Value': 90,
          'Unit': 'F',
          'UnitType': 18
        }
      },
      'Day': {
        'Icon': 1,
        'IconPhrase': 'Sunny',
        'HasPrecipitation': false
      },
      'Night': {
        'Icon': 34,
        'IconPhrase': 'Mostly clear',
        'HasPrecipitation': false
      },
      'Sources': [
        'AccuWeather'
      ],
      'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us'
    }
  ]
};
