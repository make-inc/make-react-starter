# MAKELABS.md

This is an auto-generated document for AI assistants working on this starter repository.

## Repository Structure

```
make-express-app/
├── client/                     # Frontend React application
│   ├── App.tsx                # Main React app component with routing
│   ├── main.tsx               # React entry point
│   ├── index.html             # Client HTML template
│   ├── index.css              # Global styles with Tailwind CSS
│   ├── components/            # React components
│   │   └── ui/               # Reusable UI components (shadcn/ui - 25+ components)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── sonner.tsx    # Toast notifications
│   │       ├── table.tsx
│   │       └── ...           # Many more UI components
│   ├── pages/                # Page components
│   │   ├── home.tsx          # Home page (make.inc branding)
│   │   └── not-found.tsx     # 404 page
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Tailwind utility functions
│   ├── constants/            # App constants
│   │   └── redirects.ts      # Route redirects
│   └── vite-env.d.ts         # Vite type definitions
├── server/                    # Backend Express application
│   ├── app.ts                # Express server with dev/prod mode
│   ├── routes/               # API route handlers
│   │   ├── api.ts            # API routes
│   │   └── index.ts          # Route registration
│   ├── vite.ts               # Enhanced Vite integration with HMR
│   └── db/                   # Database directory
├── shared/                   # Shared code between client/server
│   └── schema.ts             # Database schema template (Drizzle ORM)
├── components.json           # shadcn/ui configuration
├── drizzle.config.ts         # Drizzle Kit configuration
├── .env                      # Environment variables (gitignored)
├── vite.config.ts            # Vite configuration with aliases
├── tailwind.config.ts        # Tailwind CSS configuration
├── eslint.config.js          # ESLint configuration
├── tsconfig.json             # TypeScript configuration (client)
├── tsconfig.server.json      # TypeScript configuration (server)
└── dist/                     # Build output directory
```

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling and dev server with enhanced HMR
- **React Router** for client-side routing
- **Tailwind CSS** for styling with CSS variables
- **shadcn/ui** component library (25+ components - Radix UI + Tailwind)
- **React Hook Form** + **Zod** for forms and validation
- **Lucide React** for icons
- **next-themes** for dark mode support
- **Sonner** for toast notifications with theme integration
- **@tailwindcss/typography** for enhanced text styling
- **class-variance-authority** + **clsx** + **tailwind-merge** for component styling

### Backend
- **Express.js** with TypeScript
- **tsx** for TypeScript execution in development
- **Enhanced Vite integration** with HMR, error overlay, and cache busting
- **Universal server setup** supporting both development and production modes
- **dotenv** for environment variable management
- **nanoid** for unique ID generation

### Database
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the primary database
- **drizzle-kit** for migrations and schema management
- **drizzle-zod** for runtime validation schemas

### Development Tools
- **TypeScript** for type safety (separate configs for client/server)
- **ESLint** with modern configuration (v9) and React rules
- **PostCSS** + **Autoprefixer** for CSS processing
- **@hiogawa/vite-plugin-error-overlay** for enhanced error display
- **tailwindcss-animate** for component animations
- **Comprehensive lint and typecheck scripts**

## Development Guidelines

### Code Style
- Follow existing TypeScript patterns with comprehensive documentation
- Use functional components with hooks and proper TypeScript interfaces
- Leverage shadcn/ui components (25+ available) for consistent UI
- Follow Tailwind CSS utility-first approach with CSS variables
- Use React Hook Form + Zod for form handling and validation
- Implement proper error boundaries, loading states, and Suspense
- Support both light and dark themes using next-themes
- Use Sonner for consistent toast notifications

### File Organization
- Components go in `client/components/` (UI components in `ui/` subdirectory)
- Pages go in `client/pages/` with proper route structure
- API routes go in `server/routes/` with centralized registration
- Database schemas in `shared/schema.ts` (template with Drizzle ORM examples)
- Shared utilities in `client/lib/utils.ts` or `shared/`
- Constants in `client/constants/` for app-wide values
- Types can be defined inline or in dedicated `.d.ts` files
- Use `@/` path alias for client-side imports

### UI Components
- Use shadcn/ui components from `client/components/ui/` (25+ components available)
- Configure via `components.json` with Tailwind CSS variables
- Follow the established design system with CSS custom properties
- Support both light and dark themes with automatic theme detection
- Ensure accessibility with Radix UI primitives
- Components include: Button, Card, Dialog, Form, Input, Select, Table, etc.
- Toast notifications via Sonner with theme integration

### State Management
- Use React's built-in state management (useState, useContext)
- Form state managed by React Hook Form
- Consider adding global state management if complexity grows

## Important Notes for AI

1. **Always run linting and type checking** after making changes:
   ```bash
   npm run lint        # ESLint with modern config
   npm run lint:fix    # Auto-fix ESLint issues
   npm run typecheck   # TypeScript validation
   ```

2. **Development server commands**:
   ```bash
   npm run dev         # Start development server with HMR
   npm run build       # Build for production
   npm run start       # Start production server
   npm run preview     # Build and start production server
   ```

3. **Database commands available**:
   ```bash
   npm run db:generate  # Generate migrations from schema changes
   npm run db:push      # Push schema directly to database (dev)
   npm run db:migrate   # Apply pending migrations (production)
   npm run db:studio    # Open Drizzle Studio GUI
   ```

4. **Database setup**:
   - Set `DATABASE_URL` in `.env` file (already exists, not `.env.example`)
   - Run PostgreSQL locally or use cloud provider
   - Schema template in `shared/schema.ts` with examples and documentation

5. **Architecture patterns**:
   - Universal server supports both dev (Vite + HMR) and production modes
   - Enhanced error handling with Vite error overlay plugin
   - Cache busting implemented for reliable development reloads
   - Route registration centralized in `server/routes/index.ts`

6. **Component usage**:
   - 25+ shadcn/ui components available in `client/components/ui/`
   - Use `@/` path alias for client imports
   - Follow existing theme integration patterns
   - Leverage existing form validation with React Hook Form + Zod

7. **Follow existing patterns** - examine similar components/files before creating new ones

8. **Use existing dependencies** - extensive component library and utilities already available

## Current Project Status

This is a **fully-featured Express.js + React starter template** with:

- ✅ **Universal server** with development and production modes
- ✅ **Enhanced Vite integration** with HMR and error overlay
- ✅ **25+ shadcn/ui components** with theme support
- ✅ **Complete TypeScript setup** with separate client/server configs
- ✅ **Drizzle ORM integration** with PostgreSQL ready
- ✅ **Modern development tooling** (ESLint v9, PostCSS, etc.)
- ✅ **Comprehensive build pipeline** with optimized production builds

The template includes a branded make.inc homepage and is ready for immediate development. All core infrastructure is in place - focus on building your application features.

## When You're Done

**IMPORTANT**: After completing significant changes, update this file to reflect new patterns, dependencies, or architectural decisions. Keep this documentation current for future AI agents working on this project.