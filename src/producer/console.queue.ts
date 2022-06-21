import * as Bull from 'bull';
import { Queues } from './names.queues';
import configs from '../configs';

/**
 * Classe Singleton
 */
export default class LogQueue {
  private static instance: LogQueue;
  public static getInstance(): LogQueue {
    if (!LogQueue.instance) {
      LogQueue.instance = new LogQueue();
    }
    return LogQueue.instance;
  }

  private queue: Bull.Queue<any>;

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    this.queue = new Bull(Queues.log, {
      redis: configs.redis,
      prefix: 'bull'
    });

    this.queue.on('failed', (job, err) => {
      console.log('Job failed', Queues.log, job.data);
      console.log(err);
    });
  }

  add(body: any) {
    return this.queue.add(body, {
      attempts: 5,
      delay: 2000,
    });
  }
}
