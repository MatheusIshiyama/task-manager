import { bot } from './app';
import { config as setEnvs } from 'dotenv';
setEnvs();

const token: string = String(process.env.DISCORD_TOKEN);

bot.start(token);
