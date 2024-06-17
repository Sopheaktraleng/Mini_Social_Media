import { Connection } from 'typeorm';
export declare function createConnection(config: object, connectionName: string): Promise<Connection>;
