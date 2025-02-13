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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const twitterClient_1 = __importDefault(require("./twitterClient"));
const auth_token = process.env.AUTH_TOKEN || '';
const ct0 = process.env.ct0 || '';
const bearerToken = process.env.bearerToken || '';
const ourEndpoint = 'badge_count/badge_count.json?supports_ntab_urt=1';
(function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = (0, twitterClient_1.default)({
            auth_token,
            ct0,
            bearerToken,
        });
        try {
            const response = yield client.get(ourEndpoint);
            console.log('response', JSON.stringify(response.data));
        }
        catch (e) {
            if (e instanceof Error) {
                console.error('❌ Error:', e.message);
            }
            console.error('❌ Error:', e);
        }
    });
})();
