"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
// This code will generate random strings for the Firts Name, Last Name, E-mail and Password inputs
class Utils {
    static randomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static randomEmail() {
        return `test_${this.randomString(5)}@gmail.com`;
    }
    static generateStrongPassword() {
        let retVal = "Alpha_3457";
        return retVal;
    }
}
exports.Utils = Utils;
