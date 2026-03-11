# Welcome to your Lovable project

## Project info

**Production URL**: https://jm-elec.fr

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Open your Lovable project URL and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Contact form configuration

The contact form sends requests by default to:
`https://formsubmit.co/ajax/contact@jm-elec.fr`

If you want to use another provider, override it:

1. Copy `.env.example` to `.env`
2. Set `VITE_CONTACT_FORM_ENDPOINT` with your form endpoint URL
3. Restart the dev server

## Google Analytics (optionnel)

Le site peut envoyer des statistiques d'audience Google Analytics 4 uniquement apres acceptation des cookies.

1. Copiez `.env.example` vers `.env` (en local) ou ajoutez la variable dans Vercel
2. Renseignez `VITE_GA_MEASUREMENT_ID` avec votre identifiant GA4 (format `G-XXXXXXXXXX`)
3. Redeployez l'application

Si la variable est vide, aucun script Google Analytics n'est charge.

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Open your Lovable project and click Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
