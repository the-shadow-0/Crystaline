# 🚀 Crystaline

![1](https://github.com/user-attachments/assets/3bad1e27-050c-41be-afe0-9c0c8c389ce5)
![2](https://github.com/user-attachments/assets/bff6e2d8-79e5-40d1-a01c-ae4e54ea59e2)
![3](https://github.com/user-attachments/assets/8530c4f2-2093-46b1-8fef-9fe9d2a56e5a)


> **Crystaline** is the ultimate glassmorphic admin dashboard—melding beautiful frosted-glass cards with dynamic blurred backdrops, real-time visualizations, and silky-smooth micro-interactions. Powered by **Next.js**, **React**, **Tailwind CSS**, and a **FastAPI** backend, it brings data to life in a responsive, themeable interface.

---

## 🎬 Demo

https://github.com/user-attachments/assets/c321062a-b6ac-4dba-91de-e6d67e154499

---

## 🌟 Key Features

* 🧊 **Glassmorphic Design**: Translucent cards with **backdrop-filter** and CSS Houdini for real-time frost effects.
* 📈 **Live Charts**: Line, bar, and pie charts via **Chart.js**, auto-updating through WebSockets.
* 🔀 **Drag & Drop Layout**: Intuitive card reordering with **React DnD**, saving preferences seamlessly.
* 🎨 **Theme Switcher**: Toggle between Light, Dark, and Neon Accent modes—settings persist in `localStorage`.
* ⚡ **Fluid Animations**: Implemented with **Framer Motion** for hover, drag, and page transitions.
* 🔒 **Secure Auth**: JWT-based login with role-based access, backed by **FastAPI**.
* 📱 **Fully Responsive**: Mobile-first design ensures perfect rendering on any device.

---

## 📸 Screenshots

<details>
<summary>Light Mode</summary>

![3](https://github.com/user-attachments/assets/40217f51-2265-4712-8b92-7aa32b21d1cb)

</details>

<details>
<summary>Dark Mode</summary>
  
![1](https://github.com/user-attachments/assets/3bad1e27-050c-41be-afe0-9c0c8c389ce5)
![2](https://github.com/user-attachments/assets/bff6e2d8-79e5-40d1-a01c-ae4e54ea59e2)

</details>

---

## 💻 Setup & Development

```bash
# Clone the repo
git clone https://github.com/the-shadow-0/Crystaline.git
cd Crystaline

# Install dependencies
npm install

# Run in development mode
npm run dev
# Open http://localhost:3000
```

**Backend**: Navigate to `backend/` (I still working on it) and follow instructions in `README.md` to start the FastAPI server.

---

## ⚙️ Configuration

1. Copy `.env.example` → `.env.local` in both `frontend/` and `backend/`.
2. Set your URLs and secrets:

   ```env
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   NEXT_PUBLIC_WS_URL=wss://api.yourdomain.com/ws
   JWT_SECRET_KEY=your_super_secret_key
   ```
3. Review `next.config.ts` and `tailwind.config.ts` for custom theme settings.

---

## 📂 Project Structure

```
crystaline/
├─ backend/              # FastAPI service (auth, layouts, metrics, WS)
│  ├─ app/
│  └─ Dockerfile
├─ docs/                 # Screenshots, demo video, assets
├─ public/               # Static files (favicon, icons)
├─ src/                  # React application
│  ├─ components/        # UI: GlassCard, ChartCard, LayoutBuilder
│  ├─ contexts/          # Theme, Auth, Layout contexts
│  ├─ hooks/             # API & WS hooks
│  ├─ pages/             # Next.js pages
│  ├─ styles/            # Global CSS & Tailwind imports
│  └─ utils/             # HTTP client, helpers
├─ next.config.ts
├─ tailwind.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## 📜 Scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Start Next.js dev server (hot-reload) |
| `npm run build`  | Build for production                  |
| `npm run start`  | Launch production server              |
| `npm run lint`   | Run ESLint checks                     |
| `npm run format` | Apply Prettier formatting             |
| `npm run deploy` | Deploy to GitHub Pages via `gh-pages` |

---

## 🤝 Contributing

We welcome your enhancements!

1. Fork this repo
2. Create feature branch: `git checkout -b feat/YourFeature`
3. Commit changes: `git commit -m "feat: ..."`
4. Push branch: `git push origin feat/YourFeature`
5. Submit a Pull Request

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.
