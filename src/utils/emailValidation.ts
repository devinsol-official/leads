/**
 * Utility functions for validating and suggesting email corrections
 */

const COMMON_TYPOS: Record<string, string> = {
  "gamil.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "hotmai.com": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "icoud.com": "icloud.com",
};

const INVALID_DOMAINS = [
  "test.com",
  "example.com",
  "asdf.com",
  "temp.com",
  "mailinator.com",
  "10minutemail.com",
];

export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
  suggestion?: string;
}

export function validateEmail(email: string): EmailValidationResult {
  const trimmed = email.trim();

  if (!trimmed) {
    return { isValid: false, error: "Email address is required." };
  }

  // Basic email structure regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: "Please enter a valid email address (e.g. owner@company.com).",
    };
  }

  const parts = trimmed.split("@");
  if (parts.length !== 2) {
    return { isValid: false, error: "Invalid email format." };
  }

  const [username, domain] = parts;
  const lowerDomain = domain.toLowerCase();

  // Check username length
  if (username.length < 1) {
    return { isValid: false, error: "Email missing username before @." };
  }

  // Check domain typos
  if (COMMON_TYPOS[lowerDomain]) {
    const suggestedDomain = COMMON_TYPOS[lowerDomain];
    const suggestedEmail = `${username}@${suggestedDomain}`;
    return {
      isValid: false,
      error: `Did you mean ${suggestedEmail}?`,
      suggestion: suggestedEmail,
    };
  }

  // Check disposable/invalid dummy domains
  if (INVALID_DOMAINS.includes(lowerDomain)) {
    return {
      isValid: false,
      error: "Please enter a valid work or business email address.",
    };
  }

  return { isValid: true };
}
