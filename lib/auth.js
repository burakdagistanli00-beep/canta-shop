const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "dev-secret-degistir";

function signAdminToken(admin) {
  return jwt.sign({ id: admin.id, email: admin.email }, SECRET, { expiresIn: "7d" });
}

function verifyAdminToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

module.exports = { signAdminToken, verifyAdminToken };
