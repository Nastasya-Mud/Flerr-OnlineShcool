"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireOwnership = exports.requireRole = exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                success: false,
                error: 'No token, authorization denied',
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await User_1.User.findById(decoded.id).select('-password');
        if (!user || !user.isActive) {
            return res.status(401).json({
                success: false,
                error: 'Token is not valid',
            });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({
            success: false,
            error: 'Token is not valid',
        });
    }
};
exports.auth = auth;
// Middleware для проверки роли
const requireRole = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                error: 'Authentication required',
            });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                error: 'Access denied. Insufficient permissions.',
            });
        }
        next();
    };
};
exports.requireRole = requireRole;
// Middleware для проверки владельца ресурса
const requireOwnership = (resourceModel, resourceIdParam = 'id') => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    error: 'Authentication required',
                });
            }
            const resourceId = req.params[resourceIdParam];
            const resource = await resourceModel.findById(resourceId);
            if (!resource) {
                return res.status(404).json({
                    success: false,
                    error: 'Resource not found',
                });
            }
            // Проверяем, является ли пользователь владельцем или админом
            if (resource.userId?.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
                return res.status(403).json({
                    success: false,
                    error: 'Access denied. You can only modify your own resources.',
                });
            }
            next();
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: 'Server error',
            });
        }
    };
};
exports.requireOwnership = requireOwnership;
//# sourceMappingURL=auth.js.map