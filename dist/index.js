"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventKitJS = void 0;
const ffi_napi_1 = __importDefault(require("ffi-napi"));
const helpers_1 = require("../src/helpers");
class EventKitJS {
    constructor() {
        this.dylibSrc = process.cwd() +
            "/native/.build/x86_64-apple-macosx/debug/libnative.dylib";
        this.dylib = ffi_napi_1.default.Library(this.dylibSrc, {
            sources: ["bool", ["int", "string", "string"]],
            getEvents: ["bool", ["int", "string", "string"]],
        });
    }
    getEvents(sources) {
        return (0, helpers_1.ioBufferHandler)(this.dylib.getEvents, sources);
    }
    sources() {
        return (0, helpers_1.ioBufferHandler)(this.dylib.sources, undefined);
    }
}
exports.EventKitJS = EventKitJS;
//# sourceMappingURL=index.js.map