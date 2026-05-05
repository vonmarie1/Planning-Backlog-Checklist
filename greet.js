function greet(name) {
  return `Hey, ${name}! Welcome to the team!.`;
}

module.exports = greet;

function sendMessage(message) {
  if (!message || message.trim() === "") {
    throw new Error("Message cannot be empty");
  }

  if (message.length > 100) {
    throw new Error("Message too long");
  }

  return message;
}

function authenticate(token) {
  const VALID_TOKEN = "12345";

  if (token !== VALID_TOKEN) {
    throw new Error("Unauthorized");
  }

  return true;
}

function protectedAction(token) {
  authenticate(token);
  return "Access granted";
}

const password = process.env.APP_PASSWORD;