import { IFixture, IParser } from '../interface';
export declare class ParameterParser implements IParser {
    /**
     * @type {number}
     */
    priority: number;
    /**
     * @type {RegExp}
     */
    private get regExp();
    /**
     * @param {string} value
     * @return {boolean}
     */
    isSupport(value: string): boolean;
    /**
     * @param {string} value
     * @param {IFixture} fixture
     * @return {any}
     */
    parse(value: string, fixture: IFixture): any;
}
