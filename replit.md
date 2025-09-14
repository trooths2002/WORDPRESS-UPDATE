# Overview

The Righteous Teachers is a spiritual and educational website project built as a modern web application. The project serves as a digital platform for sharing educational content, spiritual teachings, and resources focused on truth-seeking through research. It features a cosmic/celestial dark theme with golden accents and includes sections for Messages in Black, Specials, Audio Archives, and other educational content. The application is designed to replicate functionality from an original WordPress site while providing a modern React-based user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with a custom dark cosmic theme featuring deep navy backgrounds and golden text
- **UI Components**: shadcn/ui component library with Radix UI primitives for consistent design
- **Design System**: Custom color palette with cosmic/celestial theme, using fonts like Cinzel for headers and Inter for body text
- **State Management**: React hooks for local state, React Query for server state management
- **Routing**: Wouter for lightweight client-side routing

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **API Structure**: RESTful API design with /api prefix for all endpoints
- **Development**: Hot module replacement and development server integration with Vite

## Component Structure
- **Page Layout**: Navigation, Hero section, content sections, and footer components
- **Content Components**: Specialized components for audio players, PDF viewers, and content cards
- **UI Library**: Comprehensive set of reusable components including forms, dialogs, and interactive elements

## Design Patterns
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Accessibility**: ARIA compliance and keyboard navigation support through Radix UI components
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Component Composition**: Modular component design with clear prop interfaces and event handlers

# External Dependencies

## Database
- **PostgreSQL**: Primary database using Neon serverless database connection
- **Drizzle ORM**: Type-safe database queries and migrations with PostgreSQL dialect

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless UI primitives for complex interactive components
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Cinzel, Inter, and Playfair Display fonts for typography

## Development Tools
- **Vite**: Fast build tool and development server with React plugin
- **TypeScript**: Static type checking and enhanced developer experience
- **ESLint/Prettier**: Code quality and formatting (implied by project structure)

## Content Management
- **WordPress Integration**: Support for importing WordPress XML content exports
- **Asset Management**: Static asset handling for images, audio files, and documents
- **Media Processing**: Image optimization and audio file management capabilities

## Performance and Optimization
- **React Query**: Server state management with caching and synchronization
- **Code Splitting**: Dynamic imports and lazy loading for optimal bundle sizes
- **Image Optimization**: Asset optimization pipeline for web delivery