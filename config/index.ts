const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3001" : "YOUR WEBSITE HERE";