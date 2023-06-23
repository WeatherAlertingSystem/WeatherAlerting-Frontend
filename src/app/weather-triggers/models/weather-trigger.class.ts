import { WeatherNotification } from './weather-notification.class';

export interface WeatherTrigger {
  _id: string;
  subscriberId: string;
  name: string;
  description: string;
  location: string;
  type: string;
  threshold: number;
  condition: string;
  offset_time: string;
  notification: WeatherNotification[];
}
