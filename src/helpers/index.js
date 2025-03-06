import crypto from "crypto";

const SECRET = "ARTHUROS";

export function random() {
  return crypto.randomBytes(128).toString("base64");
}

// Standard für SHA256-Verschlüsselung eines Passworts
export function authentication(salt, password) {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
}
