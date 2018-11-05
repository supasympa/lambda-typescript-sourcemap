"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
var LambdaEventAdapter = /** @class */ (function () {
    function LambdaEventAdapter() {
    }
    LambdaEventAdapter.convert = function (awsEvent) {
        return awsEvent; // doesn't need any conversion when invoked directly!
    };
    return LambdaEventAdapter;
}());
exports.LambdaEventAdapter = LambdaEventAdapter;
//# sourceMappingURL=LambdaEventAdapter.js.map