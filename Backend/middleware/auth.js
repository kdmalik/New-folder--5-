// middleware/auth.js

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(403).json({ message: 'No token provided', success: false });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Attach the decoded token data to the request object

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Token verification failed', error);
    return res.status(401).json({ message: 'Invalid token', success: false });
  }
};
