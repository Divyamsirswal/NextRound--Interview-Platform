# NextRound — Video Calling Interview Platform

![NextRound](https://your-logo-url.com/logo.png) <!-- Add your project logo if available -->

## 🚀 Overview

**NextRound** is a modern and efficient video calling interview platform built using the latest web technologies. It provides a seamless experience for conducting online interviews with authentication, real-time synchronization, and webhook integrations.

## 🔥 Features

- 🔐 **Authentication** powered by [Clerk](https://clerk.dev/)
- 📹 **Real-time Video & Audio** powered by [GetStream.io](https://getstream.io/)
- 🔄 **Database & State Management** using [Convex](https://convex.dev/)
- 🔔 **Webhook Support** via [Svix](https://www.svix.com/)
- 🎨 **UI Components** from [shadcn/ui](https://ui.shadcn.com/)
- 📡 **Deployed on** [Vercel](https://vercel.com/)

## 🛠️ Tech Stack

| Technology       | Description                                  |
|-----------------|----------------------------------|
| **Next.js**     | React framework for fast web apps |
| **TypeScript**  | Strongly typed JavaScript        |
| **Convex**      | Serverless database & backend functions |
| **Clerk**       | Authentication & user management |
| **GetStream.io**| Video & Audio streaming API |
| **Tailwind CSS** | Utility-first styling framework |
| **shadcn/ui**   | Beautiful, customizable UI components |
| **Svix**        | Webhook infrastructure for integrations |
| **Vercel**      | Deployment platform for web apps |

## 📂 Project Structure

```
NextRound/
│── app/
│   ├── dashboard/
│   ├── interview/
│   ├── api/
│── components/
│── hooks/
│── lib/
│── config/
│── models/
│── middleware.ts
│── server.ts
│── package.json
│── README.md
```

## 🚀 Getting Started

### 1️⃣ Prerequisites
- Node.js v18+
- NPM or Yarn
- Clerk, Convex & GetStream.io API keys
- Vercel CLI (optional for deployment)

### 2️⃣ Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/NextRound.git
cd NextRound
npm install  # or yarn install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CONVEX_URL=your_convex_api_url
NEXT_PUBLIC_GETSTREAM_API_KEY=your_getstream_api_key
SVIX_SECRET=your_svix_secret_key
```

### 4️⃣ Run the Development Server

```sh
npm run dev  # or yarn dev
```

Your app will be running at **http://localhost:3000** 🚀

## 🛠️ API Endpoints

| Method | Endpoint            | Description                 |
|--------|---------------------|-----------------------------|
| GET    | `/api/interviews`   | Fetch all interviews       |
| POST   | `/api/interviews`   | Create a new interview     |
| GET    | `/api/interviews/:id` | Fetch a specific interview |
| PUT    | `/api/interviews/:id` | Update interview details   |
| DELETE | `/api/interviews/:id` | Delete an interview        |

## 📦 Deployment

### Deploy to Vercel

```sh
vercel deploy
```

or connect your GitHub repository and deploy via the Vercel dashboard.

## 🛡 Security & Best Practices

- Always keep API keys secret (`.env.local` should not be committed)
- Use [Vercel Environment Variables](https://vercel.com/docs/environment-variables) for production
- Keep dependencies updated

## 📜 License

MIT License. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please follow the guidelines in `CONTRIBUTING.md` (if available).

## 📬 Contact 
  - **Author:** [Divyam Sirswal](https://github.com/Divyamsirswal)
  - **Email:** divyamsirswal361@example.com

--- Made with ❤️ by [Divyam Sirwal] 🚀

