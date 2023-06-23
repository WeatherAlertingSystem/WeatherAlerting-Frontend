export enum NotificationChannels {
  EMAIL = 'email',
  SMS = 'sms',
}

export interface WeatherNotification {
  channel: NotificationChannels;
  recipient: string;
}
