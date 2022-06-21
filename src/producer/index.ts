import { SQS } from 'aws-sdk';
import { Producer } from 'sqs-producer';
import configs from '../configs';
const uuid = require('uuid').v4;

/**
 * Classe Singleton
 */
export default class ProducerSQS {
  private static instance: ProducerSQS;
  public static getInstance(): ProducerSQS {
    if (!ProducerSQS.instance) {
      ProducerSQS.instance = new ProducerSQS();
    }
    return ProducerSQS.instance;
  }

  private producer: Producer;

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    this.producer = Producer.create(<any> configs.aws);
  }

  async sendMessage(data: any): Promise<SQS.SendMessageBatchResultEntryList> {
    const message = {
      id: uuid(),
      body: JSON.stringify(data),
    };
    return await this.producer.send(message);
  }
}
