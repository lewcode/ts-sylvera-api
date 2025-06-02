# Sylvera typescript API Application

A modern api with comprehensive tooling including linting, formatting, testing, and development automation. Currently serves project data

## Features

- **TypeScript**: Strict type checking with modern ES2020 features
- **Jest**: Comprehensive testing framework with coverage reporting
- **Development Tools**: Hot reload with nodemon and ts-node
- **Build System**: TypeScript compiler with source maps and declarations

## Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Prisma

Prisma is used here as database ORM 

1. To generate the prisma schema
```
npx prisma generate
```
2. To view the database in prisma's browser studio
```
npx prisma studio
```
Further information available at https://www.prisma.io/docs/orm/overview/introduction


### Development

Start the development server with hot reload:
```bash
npm run dev
```

### Building

Build the project for production:
```bash
npm run build
```

### Running

Run the built application:
```bash
npm start
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project
- `npm start` - Run the built application
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Lint the code
- `npm run lint:fix` - Lint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run clean` - Clean build directory

## Project Structure

```
src/
├── index.ts           # Main application entry point
└── utils/
    ├── logger.ts      # Logging utility

tests/                 # Test files
├── logger.spec.ts
└── server.spec.ts

Configuration files:
├── tsconfig.json      # TypeScript configuration
├── jest.config.js     # Jest testing configuration
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
└── package.json       # Project dependencies and scripts
```

## Code Quality

This project uses several tools to maintain code quality:

- **TypeScript**: Provides static type checking
- **ESLint**: Enforces code style and catches potential issues
- **Prettier**: Automatically formats code for consistency
- **Jest**: Ensures code works as expected through comprehensive testing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Format code: `npm run format`
7. Submit a pull request

## License

ISC
