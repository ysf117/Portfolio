# Contributing

Thanks for your interest in contributing! This is a personal portfolio project, but suggestions and improvements are welcome.

## How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/your-feature`)
3. **Commit** your changes (`git commit -m "Add your feature"`)
4. **Push** to the branch (`git push origin feature/your-feature`)
5. **Open** a Pull Request

## Development Setup

```bash
npm install
npm run dev
```

## Guidelines

- Follow the existing **Atomic Design** component structure (`atoms → molecules → organisms → templates`)
- Use **Tailwind CSS** utility classes — avoid inline styles
- Keep all portfolio content in `src/data/portfolio.ts`
- Ensure the project builds cleanly with `npm run build` before submitting
