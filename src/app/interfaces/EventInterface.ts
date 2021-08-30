import { Bot } from '../bot';

export interface IEvent {
  run: (client: Bot) => Promise<void>;
  name: string;
}
