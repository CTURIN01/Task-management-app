const rbac = (allowedRoles) => {
    return (req, res, next) => {
      if (allowedRoles.includes(req.user.role)) {
        next();
      } else {
        res.status(403).send({ error: 'Access denied.' });
      }
    };
  };
  
  module.exports = rbac;