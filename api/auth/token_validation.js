import { verify } from "jsonwebtoken";
import { config } from "dotenv";
config();

export function checkToken(req, res, next) {
  let token = req.get("authorization");
  if (token) {
    token = token.slice(7);
    verify(token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.json({
          success: 0,
          message: "Invalid token",
        });
      } else {
        next();
      }
    });
  } else {
    res.json({
      success: 0,
      message: "Access denied unauthorized user",
    });
  }
}
