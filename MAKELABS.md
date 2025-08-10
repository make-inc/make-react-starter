# MAKELABS.md

This is an auto-generated document for AI assistants working on this starter repository.

## Repository Structure

```
<project-name>/
├── client/                     # Frontend React application
│   ├── App.tsx                # Main React app component
│   ├── main.tsx               # React entry point
│   ├── index.html             # Client HTML template
│   ├── index.css              # Global styles with Tailwind CSS
│   ├── components/            # React components
│   │   ├── Navigation.tsx     # Navigation component
│   │   └── ui/               # Reusable UI components (shadcn/ui)
│   ├── pages/                # Page components
│   │   ├── home.tsx          # Home page
│   │   └── not-found.tsx     # 404 page
│   ├── lib/                  # Utility functions
│   └── constants/            # App constants
├── server/                    # Backend Express application
│   ├── app.ts                # Express server entry point
│   ├── routes/               # API route handlers
│   ├── vite.ts               # Vite integration for SSR
│   └── db/                   # Database migrations
│       └── migrations/       # Generated migration files
├── shared/                   # Shared code between client/server
│   └── schema.ts             # Database schema template (Drizzle ORM)
├── drizzle.config.ts         # Drizzle Kit configuration
├── .env.example              # Environment variables template
└── dist/                     # Build output directory
```

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling and dev server
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **shadcn/ui** component library (Radix UI + Tailwind)
- **React Hook Form** + **Zod** for forms and validation
- **Lucide React** for icons
- **next-themes** for dark mode support
- **Sonner** for toast notifications

### Backend
- **Express.js** with TypeScript
- **tsx** for TypeScript execution in development
- **Vite** integration for SSR capabilities

### Database
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database
- **drizzle-kit** for migrations and schema management
- **drizzle-zod** for runtime validation schemas

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code linting
- **PostCSS** + **Autoprefixer** for CSS processing
- **nodemon** for development server restarts

## Development Guidelines

### Code Style
- Follow existing TypeScript patterns
- Use functional components with hooks
- Leverage shadcn/ui components for consistent UI
- Follow Tailwind CSS utility-first approach
- Use React Hook Form for form handling
- Implement proper error boundaries and loading states

### File Organization
- Components go in `client/components/`
- Pages go in `client/pages/`
- API routes go in `server/routes/`
- Database schemas in `shared/schema.ts` (template with examples, accessible by both client and server)
- Shared utilities in `client/lib/` or `shared/`
- Types can be defined inline or in dedicated `.d.ts` files

### UI Components
- Use shadcn/ui components from `client/components/ui/`
- Follow the established design system with CSS custom properties
- Support both light and dark themes
- Ensure accessibility with Radix UI primitives

### State Management
- Use React's built-in state management (useState, useContext)
- Form state managed by React Hook Form
- Consider adding global state management if complexity grows

## Important Notes for AI

1. **Always run linting and type checking** after making changes:
   ```bash
   npm run lint
   npm run typecheck
   ```

2. **Database commands available**:
   ```bash
   npm run db:generate  # Generate migrations from schema changes
   npm run db:push      # Push schema directly to database (dev)
   npm run db:migrate   # Apply pending migrations (production)
   npm run db:studio    # Open Drizzle Studio GUI
   ```

3. **Database setup required**:
   - Set `DATABASE_URL` environment variable (see `.env.example`)
   - Run PostgreSQL locally or use cloud provider
   - Generate and apply initial migration: `npm run db:generate && npm run db:push`

4. **Follow existing patterns** - examine similar components/files before creating new ones

5. **Use existing dependencies** - don't add new packages without checking if functionality exists

6. **Maintain TypeScript types** - ensure all new code is properly typed

7. **Database schema workflow**:
   - Define your tables in `shared/schema.ts` following the examples
   - Run `npm run db:generate` after adding/modifying schemas
   - Use `npm run db:push` for development or `npm run db:migrate` for production

## When You're Done

**IMPORTANT**: After completing your changes, overwrite this file with an updated version that reflects what the project is about, new patterns, dependencies, or architectural decisions you've made. Keep this documentation current for future reference.