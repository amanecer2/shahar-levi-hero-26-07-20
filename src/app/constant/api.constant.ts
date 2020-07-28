import {environment} from '../../environments/environment';

const BASE_URL = 'https://dataservice.accuweather.com';
const API_KEY = `apikey=${environment.accuweatherKey}`;

export const URLS = {
  FIVE_DAYS_DAILY_FORCASTS: (locationKey) => `${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?${API_KEY}`,
  AUTO_COMPLETE: (q) => `${BASE_URL}/locations/v1/cities/autocomplete?${API_KEY}&q=${q}`,
  CURRENT_CONDITIONS: (locationKey) => `${BASE_URL}/currentconditions/v1/${locationKey}?${API_KEY}`
};
