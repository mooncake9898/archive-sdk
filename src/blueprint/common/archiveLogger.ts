// import { config } from 'dotenv';
import { LoggerManager } from '../../logging';

export class ArchiveLogger extends LoggerManager {
  // to override the kafka configs, override the getKafkaConfig method
  public static getDefaultBlueprintIdentifier(): string {
    return ''; // default has no blueprint ID
  }
}
