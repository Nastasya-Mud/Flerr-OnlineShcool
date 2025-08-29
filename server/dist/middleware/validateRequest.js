"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const validateRequest = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            error: 'Validation failed',
            details: errors.array().map(error => ({
                field: error.param || 'unknown',
                message: error.msg,
                value: error.value,
            })),
        });
    }
    next();
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map