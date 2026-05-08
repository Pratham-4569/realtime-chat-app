import { ENV } from "./env.js";

export const resendClient = null;

export const sender = {
  email: ENV.EMAIL_FROM || "test@test.com",
  name: ENV.EMAIL_FROM_NAME || "Chatify",
};