"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnection = void 0;
const typeorm_1 = require("typeorm");
function createConnection(config, connectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = yield new typeorm_1.ConnectionOptionsReader(config).get(connectionName);
        return typeorm_1.getConnectionManager()
            .create(options.default ? options.default : options)
            .connect();
    });
}
exports.createConnection = createConnection;
//# sourceMappingURL=createConnection.js.map