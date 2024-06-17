"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixturesIterator = void 0;
const lodash_1 = require("lodash");
function* fixturesIterator(fixtures) {
    const state = {};
    while (true) {
        const result = fixtures.find((l) => lodash_1.sum(l.dependencies.map((d) => (state[d] !== undefined ? 1 : 0))) === l.dependencies.length &&
            !state[l.name]);
        if (result) {
            state[result.name] = true;
            yield result;
        }
        else {
            return;
        }
    }
}
exports.fixturesIterator = fixturesIterator;
//# sourceMappingURL=fixturesIterator.js.map