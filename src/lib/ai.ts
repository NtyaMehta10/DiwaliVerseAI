/**
 * AI Abstraction Layer
 * This module provides a clean interface for generating AI content.
 * It uses environment variables to determine which provider to use.
 * If no provider is configured, it falls back to a robust mock generator.
 */

interface GenerateGreetingOptions {
  recipient: string;
  language: string;
  tone: string;
  customContext?: string;
}

export async function generateGreeting(options: GenerateGreetingOptions): Promise<string> {
  // In a real implementation, we would check for API keys here
  // e.g., if (process.env.OPENAI_API_KEY) { return generateWithOpenAI(options); }

  // For now, we simulate an API call with a slight delay and return a mock response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getMockGreeting(options));
    }, 1500); // Simulate network latency
  });
}

function getMockGreeting({ recipient, language, tone, customContext }: GenerateGreetingOptions): string {
  const toneMap: Record<string, string> = {
    Traditional: "May the divine light of Diwali shine with peace, prosperity, happiness, and good health in your life.",
    Emotional: "Wishing you a Diwali filled with the warmth of family, the joy of togetherness, and memories to cherish forever.",
    Funny: "May your Diwali be as bright as your neighbor's overly competitive light display. Have a great one!",
    Professional: "Wishing you and your family a prosperous Diwali. May this festival bring new opportunities and continued success.",
    Modern: "Happy Diwali! Hope your festival is lit (literally and figuratively). Stay safe and enjoy the sweets!",
  };

  const baseGreeting = toneMap[tone] || toneMap["Traditional"];

  let personalizedGreeting = `Dear ${recipient},\n\n${baseGreeting}`;

  if (customContext) {
    personalizedGreeting += `\n\n${customContext}`;
  }

  personalizedGreeting += `\n\nWishing you a very Happy Diwali!`;

  // Note: Actual translation would require a real AI provider.
  // We add a meta-note if the language is not English in the mock.
  if (language !== "English") {
    personalizedGreeting += `\n\n[Note: In a production environment with an configured AI provider, this message would be beautifully translated and localized into natural ${language}.]`;
  }

  return personalizedGreeting;
}
