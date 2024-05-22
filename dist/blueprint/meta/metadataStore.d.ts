import { BlueprintMetadata } from '../models/metadata.entity';
export declare abstract class MetadataStore {
    abstract upsert(blueprintId: string, data: object, lastSyncAt: number): Promise<boolean>;
    abstract delete(blueprintId: string): Promise<boolean>;
    abstract findOne(blueprintId: string): Promise<BlueprintMetadata>;
}
