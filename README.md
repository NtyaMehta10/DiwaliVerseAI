# DiwaliVerse AI

**"Celebrate. Create. Learn. Laugh."**

DiwaliVerse AI is a premium, polished, production-quality AI-powered consumer web product for celebrating the festival of lights. It provides a cohesive digital celebration experience combining personalization, AI-generated cultural content, and interactive learning.

## Features

- **Premium Landing Page:** A luxury, editorial-style introduction to the DiwaliVerse experience.
- **AI Greeting Studio:** Craft personalized, culturally nuanced Diwali greetings across multiple Indian languages and tones using an AI abstraction layer.
- **AI Meme Studio:** Generate context-aware captions and create highly relatable multilingual memes about family, sweets, and celebration prep.
- **Learn Hub:** Explore the rich traditions, stories, and regional diversity of the festival with a timeline and interactive quiz.
- **Secure Authentication:** User registration and login powered by NextAuth.js (Credentials Provider) and a Prisma/SQLite database, designed to be extensible to Google OAuth.
- **Premium UI/UX:** Built with Tailwind CSS, Radix UI, and Framer Motion, utilizing an original "Quiet Luxury" art direction (dark theme, gold accents, cinematic composition, and elegant typography).

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
- **UI Components:** Radix UI primitives, Lucide React icons
- **Animations:** Framer Motion
- **Database ORM:** Prisma
- **Database:** SQLite (local development)
- **Authentication:** NextAuth.js (Auth.js) with bcrypt

## Project Structure

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── (auth)/           # Login and Register pages
│   ├── dashboard/        # Dashboard, Greeting Studio, Meme Studio
│   ├── learn/            # Learn Hub and Quiz
│   ├── api/auth/         # NextAuth API routes and registration endpoint
│   ├── layout.tsx        # Root layout with font configuration and Providers
│   ├── page.tsx          # Premium Landing Page
│   └── globals.css       # Global styles and Tailwind configuration
├── components/           # Reusable React components
│   ├── ui/               # Base UI components (Button, Input, Label, Card)
│   └── Providers.tsx     # NextAuth SessionProvider wrapper
├── lib/                  # Utilities and library configurations
│   ├── utils.ts          # Tailwind class merging utility
│   ├── db.ts             # Prisma client singleton
│   ├── auth.ts           # NextAuth configuration options
│   └── ai.ts             # AI abstraction layer (mock generator with delay)
└── types/                # Custom TypeScript type definitions
prisma/
└── schema.prisma         # Database schema (User, Greeting, Meme, QuizProgress)
```

## Local Development Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation Steps

1. **Clone the repository** (if applicable) and navigate to the project directory.

2. **Install dependencies:**
   `npm install`

3. **Set up the environment variables:**
   Create a `.env` file in the root directory based on `.env.example`:
   `cp .env.example .env`
   *(Ensure you generate a secure `NEXTAUTH_SECRET` if moving to production).*

4. **Initialize the database:**
   Push the Prisma schema to generate the local SQLite database (`dev.db`):
   `npx prisma db push`

5. **Start the development server:**
   `npm run dev`

6. **Open the application:**
   Visit http://localhost:3000 in your browser.

## Environment Variables (.env.example)

Create a `.env` file with the following variables:

```env
# Database configuration (SQLite for local dev)
DATABASE_URL="file:./dev.db"

# NextAuth configuration
# Generate a secret using: openssl rand -base64 32
NEXTAUTH_SECRET="your-super-secret-nextauth-key"
NEXTAUTH_URL="http://localhost:3000"

# AI Provider Configuration (Future extension)
# OPENAI_API_KEY="your-openai-api-key"
```

## Testing and Verification

- **Linting:** Ensure code quality by running:
  `npm run lint`
- **Type Checking and Production Build:** Verify that the application builds successfully:
  `npm run build`

## Security Notes

- This project uses SQLite and basic Credentials authentication for development and demonstration purposes.
- Passwords are securely hashed using `bcrypt` before being stored in the database.
- Never commit the `.env` file or the `prisma/dev.db` database to version control. They are excluded in `.gitignore`.
- For a production deployment, migrate from SQLite to a robust database like PostgreSQL, enforce strict CORS/security headers, and configure a proper OAuth provider (e.g., Google OAuth).

## Future Roadmap

- Integrate real AI providers (OpenAI, Anthropic) into the `src/lib/ai.ts` abstraction layer.
- Add image generation APIs for the Meme Studio to dynamically construct memes.
- Expand the Learn Hub with more interactive stories and regions.
- Implement Google OAuth for seamless sign-in.
- Save generated greetings and memes to user profiles using the Prisma database.
