"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YamlLoader = void 0;
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
class YamlLoader {
    constructor() {
        this.extensionSupport = ['.yaml', '.yml'];
    }
    /**
     * @param {string} filePath
     * @return {boolean}
     */
    isSupport(filePath) {
        return this.extensionSupport.includes(path.extname(filePath));
    }
    /**
     * @param {string} filePath
     * @return {IFixturesConfig}
     */
    load(filePath) {
        return yaml.safeLoad(fs.readFileSync(filePath).toString());
    }
}
exports.YamlLoader = YamlLoader;
//# sourceMappingURL=YamlLoader.js.map