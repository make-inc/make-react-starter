# Express SSR App

A modern, full-stack Server-Side Rendered (SSR) application built with Express, React, TypeScript, Tailwind CSS, and Shadcn/ui components. This template provides a complete development environment with hot reloading, production builds, and a comprehensive API structure.

## 🚀 Tech Stack

- **Backend**: Express.js with TypeScript
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Server-Side Rendering**: React renderToString + Express
- **Development**: Hot Module Replacement (HMR)
- **Type Safety**: Full TypeScript coverage

## ✨ Features

### 🔥 Development Experience
- **Hot Module Replacement**: Instant updates during development
- **TypeScript**: Full type safety across the entire stack
- **Server-Side Rendering**: Fast initial page loads and SEO benefits
- **API Routes**: Built-in REST API with Express routing
- **Error Handling**: Comprehensive error boundaries and logging

### 🎨 UI/UX
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Beautiful, accessible components
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode Ready**: CSS custom properties setup
- **Accessibility**: WCAG compliant components

### 🚀 Production Ready
- **Build Optimization**: Vite's optimized production builds
- **Static Asset Serving**: Efficient file serving
- **Environment Configuration**: Development/production modes
- **Health Check Endpoints**: API monitoring support

## 📁 Project Structure

```
├── src/
│   ├── server/           # Express server code
│   │   ├── app.ts        # Production server setup
│   │   ├── dev.ts        # Development server with HMR
│   │   └── render.tsx    # SSR rendering logic
│   ├── client/           # React client code
│   │   ├── App.tsx       # Main React component
│   │   ├── main.tsx      # Client entry point
│   │   └── index.css     # Global styles + Tailwind
│   ├── components/       # Reusable UI components
│   │   └── ui/           # Shadcn/ui components
│   │       └── button.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Common utilities (cn helper)
│   └── routes/           # API routes
│       └── api.ts        # REST API endpoints
├── dist/                 # Built files (generated)
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript config
├── tsconfig.server.json  # Server TypeScript config
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS config
├── postcss.config.js     # PostCSS config
└── index.html            # HTML template
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone or download this template**
   ```bash
   # If cloning from a repository
   git clone <repository-url>
   cd express-ssr-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

4. **Start building!** 🎉

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:client` | Build only the client bundle |
| `npm run build:server` | Build only the server bundle |
| `npm run start` | Start production server |
| `npm run preview` | Build and start production server |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# Add your environment variables here
# DATABASE_URL=your_database_url
# JWT_SECRET=your_jwt_secret
```

### Tailwind CSS Customization

Modify `tailwind.config.js` to customize your design system:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        brand: {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Adding New Shadcn/ui Components

The project is set up to easily add more Shadcn/ui components:

1. **Install a new component** (if using Shadcn/ui CLI):
   ```bash
   npx shadcn-ui@latest add dialog
   ```

2. **Or manually create components** following the existing pattern in `src/components/ui/`

## 🌐 API Endpoints

The server includes built-in API routes:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check and server status |
| `GET` | `/api/users` | Get all users |
| `POST` | `/api/users` | Create a new user |

### Example API Usage

```javascript
// Get server health
fetch('/api/health')
  .then(res => res.json())
  .then(data => console.log(data))

// Create a new user
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
```

## 🏗️ Architecture Overview

### Server-Side Rendering (SSR) Flow

1. **Client requests a page** → Express server receives the request
2. **Server renders React** → Components are rendered to HTML string
3. **HTML sent to client** → User sees content immediately
4. **Client hydrates** → React makes the page interactive
5. **Full interactivity** → Client-side routing and state management

### Development vs Production

**Development (`npm run dev`)**:
- Uses Vite development server
- Hot Module Replacement (HMR)
- Source maps for debugging
- Real-time TypeScript compilation

**Production (`npm run build && npm run start`)**:
- Optimized bundles with Vite
- Static file serving
- Minified code
- Server-side rendering only

## 🎨 Styling Guide

### Using Tailwind CSS

The project uses Tailwind CSS for styling with a custom design system:

```tsx
// Example component styling
<div className="bg-background text-foreground">
  <h1 className="text-2xl font-bold text-primary">
    Styled with Tailwind
  </h1>
  <Button variant="outline" size="lg">
    Custom Button
  </Button>
</div>
```

### CSS Custom Properties

The design system uses CSS custom properties for theming:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}
```

## 🔒 Adding Authentication

To add authentication to your app:

1. **Install auth libraries**:
   ```bash
   npm install jsonwebtoken bcryptjs
   npm install -D @types/jsonwebtoken @types/bcryptjs
   ```

2. **Create auth middleware** in `src/middleware/auth.ts`

3. **Add protected routes** in your API endpoints

4. **Implement client-side auth** with React context or state management

## 📊 Adding a Database

### With Prisma (Recommended)

1. **Install Prisma**:
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

2. **Define your schema** in `prisma/schema.prisma`

3. **Update API routes** to use Prisma client

### With MongoDB

1. **Install MongoDB driver**:
   ```bash
   npm install mongodb
   npm install -D @types/mongodb
   ```

2. **Create database connection** in `src/lib/db.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

### Docker

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t express-ssr-app .
   docker run -p 3000:3000 express-ssr-app
   ```

## 🧪 Testing

### Adding Tests

1. **Install testing libraries**:
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom
   ```

2. **Create test files**:
   ```bash
   src/
   ├── components/
   │   └── __tests__/
   │       └── Button.test.tsx
   └── routes/
       └── __tests__/
           └── api.test.ts
   ```

3. **Add test script to package.json**:
   ```json
   {
     "scripts": {
       "test": "vitest",
       "test:watch": "vitest --watch"
     }
   }
   ```

## 🐛 Troubleshooting

### Common Issues

**Port already in use**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**TypeScript errors**:
```bash
# Clear TypeScript cache
npx tsc --build --clean
```

**Node modules issues**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Hydration mismatches**:
- Check for differences between server and client rendering
- Ensure consistent data and state
- Review console for hydration warnings

## 📚 Learning Resources

- [React 19 Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Next Steps

Now that you have your Express SSR app running, consider adding:

- 🔐 **Authentication & Authorization**
- 🗄️ **Database Integration** (Prisma, MongoDB, PostgreSQL)
- 🧪 **Testing Suite** (Vitest, React Testing Library)
- 📊 **Analytics & Monitoring**
- 🔍 **SEO Optimizations**
- 🌍 **Internationalization (i18n)**
- 📱 **Progressive Web App (PWA) features**
- 🚀 **CI/CD Pipeline**

---

**Happy coding!** 🎉 If you have questions or need help, check the documentation links above or create an issue in the repository.