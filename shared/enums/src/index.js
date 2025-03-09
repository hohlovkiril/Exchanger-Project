"use strict";
// Authorization 
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.CurrencyType = exports.Permission = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["Root"] = 0] = "Root";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["Client"] = 2] = "Client";
    Role[Role["Anonym"] = 3] = "Anonym";
})(Role || (exports.Role = Role = {}));
var Permission;
(function (Permission) {
})(Permission || (exports.Permission = Permission = {}));
// Currency
var CurrencyType;
(function (CurrencyType) {
    CurrencyType[CurrencyType["CRYPTO"] = 0] = "CRYPTO";
    CurrencyType[CurrencyType["FIAT"] = 1] = "FIAT";
})(CurrencyType || (exports.CurrencyType = CurrencyType = {}));
// Order
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["WAITING_CONFIRM"] = 0] = "WAITING_CONFIRM";
    OrderStatus[OrderStatus["WAITING_PAYMENT"] = 1] = "WAITING_PAYMENT";
    OrderStatus[OrderStatus["PROCESSING"] = 2] = "PROCESSING";
    OrderStatus[OrderStatus["FINISH"] = 3] = "FINISH";
    OrderStatus[OrderStatus["DECLINE_AUTO"] = 4] = "DECLINE_AUTO";
    OrderStatus[OrderStatus["DECLINE_USER"] = 5] = "DECLINE_USER";
    OrderStatus[OrderStatus["DECLINE_ADMIN"] = 6] = "DECLINE_ADMIN";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
