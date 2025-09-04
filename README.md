# Le Reserve Motorworks Website

A production-ready single-page website for Le Reserve Motorworks, specializing in luxury interior trim restoration for Ferrari, Lamborghini, Maserati, and other exotic vehicles.

## Features

- **Single-page layout** with smooth scroll navigation
- **Responsive design** optimized for all devices
- **Modern UI** with luxury brand styling (black background, Ferrari red accents)
- **Interactive sections**: Hero, About, Gallery, Services, Estimate Form
- **Form validation** with Zod and React Hook Form
- **Email integration** via Formspree
- **Accessibility** features and focus states
- **SEO optimized** with meta tags and semantic HTML

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **React Markdown** for content rendering
- **Formspree** for email handling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Add your Formspree form ID to `.env`:
   ```
   VITE_FORMSPREE_ID=your_formspree_form_id_here
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Content Management

### Adding Gallery Images

1. Place your before/after images in `/public/assets/`
2. Update `/src/data/gallery.ts` with your image information:
   ```typescript
   { 
     id: "unique-id", 
     title: "Component Name", 
     model: "Vehicle Model", 
     image: "/assets/YourImageBA.jpg", 
     caption: "Description of the restoration" 
   }
   ```

### Editing About Content

Edit `/src/content/about.md` using standard Markdown syntax. The content will be automatically rendered with proper styling.

### Customizing Services

Modify the services array in `/src/components/Services.tsx` to add, remove, or update service offerings.

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add your `VITE_FORMSPREE_ID` environment variable in Vercel dashboard

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## Environment Variables

- `VITE_FORMSPREE_ID`: Your Formspree form ID for contact form submissions

## Project Structure

```
/
├── public/
│   └── assets/           # Gallery images go here
├── src/
│   ├── components/       # React components
│   ├── content/         # Markdown content files
│   ├── data/           # Data files (gallery items)
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.cjs # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## Customization

### Brand Colors

Update colors in `tailwind.config.cjs`:
- `brand-bg`: Main background (#0B0B0B)
- `brand-surface`: Card backgrounds (#1A1A1A)  
- `brand-accent`: Ferrari red (#D71920)
- `brand-text`: Text color (#EDEDED)

### Contact Information

Update contact details in:
- `/src/components/Footer.tsx`
- `/src/components/EstimateForm.tsx` (form subject line)

## Support

For technical issues or customization help, refer to the documentation of the individual packages used in this project.

## License

© 2024 Le Reserve Motorworks LLC. All rights reserved.
