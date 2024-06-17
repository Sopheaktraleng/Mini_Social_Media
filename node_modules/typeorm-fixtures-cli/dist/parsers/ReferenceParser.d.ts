import { IParser, IFixture } from '../interface';
export declare class ReferenceParser implements IParser {
    /**
     * @type {number}
     */
    priority: number;
    /**
     * @param {string} value
     * @return {boolean}
     */
    isSupport(value: string): boolean;
    /**
     * @param {string} value
     * @param {IFixture} fixture
     * @param entities
     * @return {any}
     */
    parse(value: string, fixture: IFixture, entities: any): any;
}
