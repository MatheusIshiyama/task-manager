import { Bot } from '../bot';

import { IEvent } from '../interfaces';

class Ready implements IEvent {
  run = async (client: Bot) => {
    client.logger.success(`${client.user?.username} is now ready!`);
  };

  name = 'ready';
}

export default new Ready();
