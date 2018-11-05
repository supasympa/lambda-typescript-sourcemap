"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.invoke = function (req, awsContext) {
        if (!!req.throwError) {
            throw new Error('TypeScript Error: ~Service.ts~ line 9.');
        }
        else {
            console.log('No TypeScript Error: ~Service.ts~ line 11');
            console.trace();
        }
    };
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=Service.js.map