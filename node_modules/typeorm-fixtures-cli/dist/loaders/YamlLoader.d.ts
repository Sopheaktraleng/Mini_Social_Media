import { IFixturesConfig, ILoader } from '../interface';
export declare class YamlLoader implements ILoader {
    extensionSupport: string[];
    /**
     * @param {string} filePath
     * @return {boolean}
     */
    isSupport(filePath: string): boolean;
    /**
     * @param {string} filePath
     * @return {IFixturesConfig}
     */
    load(filePath: string): IFixturesConfig;
}
