const authAdminMiddleware = (req, res, next) => {
    if (req.userData.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "Access denied. Admins only.",
        });
    }
    next();
}

module.exports = authAdminMiddleware;