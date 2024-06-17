"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonLoader = void 0;
const path = require("path");
const fs = require("fs");
class JsonLoader {
    constructor() {
        this.extensionSupport = ['.json'];
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
        return JSON.parse(fs.readFileSync(filePath).toString());
    }
}
exports.JsonLoader = JsonLoader;
//# sourceMappingURL=JsonLoader.js.map