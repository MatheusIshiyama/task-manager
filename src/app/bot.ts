import { Client, ClientOptions, Intents } from 'discord.js';

export class Bot extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  start(token: string) {
    this.login(token);
  }
}

export default new Bot({ intents: [Intents.FLAGS.DIRECT_MESSAGES] });
