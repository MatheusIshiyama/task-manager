import { Client, ClientOptions, Collection, Intents } from 'discord.js';
import consola, { Consola } from 'consola';
import { promisify } from 'util';
import glob from 'glob';

const globPromise = promisify(glob);

export class Bot extends Client {
  public logger: Consola = consola;
  public events: Collection<string, Event> = new Collection();
  public commands: Collection<string, Event> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  async start(token: string) {
    this.login(token);

    const eventFiles: string[] = await globPromise(`${__dirname}/events/*{.ts,.js}`);
    eventFiles.forEach(async (filePath: string) => {
      const { default: file } = await import(filePath);
      this.events.set(file.name, file);
      this.on(file.name, file.run.bind(null, this));
    });
  }
}

export default new Bot({ intents: [Intents.FLAGS.DIRECT_MESSAGES] });
