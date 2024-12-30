"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ecmascript modules
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hola mundooo');
});
const port = process.env.PORT || 4000; //variable de entorno host
app.listen(port, () => {
    console.log('servidor funcionando en el puerto:', port);
});
//# sourceMappingURL=index.js.map