# MovieSearch
<img width="1842" height="912" alt="image" src="https://github.com/user-attachments/assets/0e021611-a78a-4422-ae00-770c610d15ee" />

A movie discovery app built with React, TypeScript, and Firebase. Search OMDb for movies, view details, and save your favourites.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict) |
| Styling | Plain CSS with custom properties (no framework) |
| Routing | React Router v7 |
| Auth | Firebase Authentication |
| Database | Firebase Realtime Database |
| Movie data | [OMDb API](https://www.omdbapi.com/) |
| Linting | oxlint |

## Setup

### 1. Clone and install

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

Required variables:

```env
# OMDb API — https://www.omdbapi.com/apikey.aspx
VITE_OMDB_API_KEY=your_omdb_key

# Firebase — from your Firebase project settings
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_DATABASE_URL=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### 3. Enable Firebase providers

In the Firebase Console, enable **Email/Password** under Authentication → Sign-in methods.

### 4. Run

```bash
npm run dev
```

## Scripts

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run oxlint
```

## Features

- **Discover movies** — browse featured titles on the home page
- **Search** — real-time search via OMDb with pagination (infinite scroll)
- **Movie details** — full details including ratings, plot, director, and awards
- **Favourites** — save movies to your account (Firebase Realtime Database)
- **Authentication** — sign in / register with email and password
- **Responsive** — works on mobile and desktop

## Pages

| Route | Description | Auth required |
|---|---|---|
| `/` | Home — featured movies / search results | No |
| `/movies/:imdbId` | Movie detail page | No |
| `/auth` | Sign in / Register | No |
| `/favourites` | Saved movies | Yes |
| `*` | 404 Not Found | No |

## Architecture

The project follows **MVVM** (Model–View–ViewModel) adapted for React:

- **Services** (`src/services/`) — pure async wrappers around OMDb and Firebase. No React imports.
- **Contexts** (`src/context/`) — global state: auth, favourites, search.
- **ViewModels** (`useXxxViewModel.ts`) — custom hooks that own local state and call services.
- **Views** (`XxxView.tsx`) — thin React components that only render and delegate to ViewModels.

See [docs/Architecture.md](docs/Architecture.md) for the full architecture document.

## Docs

| Document | Contents |
|---|---|
| [README.md](README.md) | This file — setup and features |
| [docs/Architecture.md](docs/Architecture.md) | Design decisions, data flow, layer responsibilities |
| [docs/FolderStructure.md](docs/FolderStructure.md) | Full file tree and naming conventions |
| [docs/PromptHistory.md](docs/PromptHistory.md) | Chronological log of all changes |
| [docs/KnownIssues.md](docs/KnownIssues.md) | Open and resolved issues |
| [docs/LessonsLearned.md](docs/LessonsLearned.md) | Key engineering lessons from this project |
