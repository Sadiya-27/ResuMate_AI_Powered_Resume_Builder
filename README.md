# 📄 ResuMate – AI-Powered Resume Builder

**ResuMate** is a professional full-stack SaaS (Software-as-a-Service) application designed to streamline the resume-building process with the power of AI. It includes smart features such as auto-fill via ChatGPT, drag-and-drop reordering, subscription-based access, and beautiful mobile-responsive design — all optimized for user convenience and professional output.

---

## 🚀 Features

- 🧠 **AI Auto-Fill** – Automatically generate resume content using the ChatGPT API
- 📋 **Multi-Step Form** – Smooth and validated input collection using React Hook Form
- 🔁 **Dynamic Form Arrays** – Add or remove multiple inputs (e.g., experiences, skills) using `useFieldArray`
- 🖱️ **Drag-and-Drop Interface** – Easily reorder sections with `dnd-kit`
- 💳 **Stripe Checkout Integration** – Tiered subscription plans for monetization
- 🖨️ **PDF Export** – Save or print resumes using `react-to-print`
- 🌐 **URL State Management** – Shareable and persistent URL state
- 🗃️ **PostgreSQL Database** – Structured data storage with Prisma
- ☁️ **File Uploads via Vercel Blob** – Upload images or files to the cloud
- 💾 **Auto-Save** – Avoid data loss with periodic save hooks
- 🎨 **Mobile-Responsive UI** – Built with Tailwind CSS and Shadcn UI components

---

## 🧰 Tech Stack

| Layer            | Technology                          |
|------------------|--------------------------------------|
| Frontend         | React, TypeScript, Tailwind CSS, Shadcn UI |
| Backend/API      | Next.js (App Router), ChatGPT API, Stripe |
| State Management | React Hook Form, useFieldArray, dnd-kit |
| Database         | PostgreSQL (via Prisma ORM)         |
| File Storage     | Vercel Blob                          |
| PDF Export       | react-to-print                       |
| Auth & Payments  | Clerk (or auth provider), Stripe     |
| Hosting          | Vercel                               |

---
<img width="959" alt="image" src="https://github.com/user-attachments/assets/d82b53f4-ade1-48d5-8287-ba066b91b282" />
---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resumate.git
cd resumate
```
### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create a .env file in the root folder and add the following:

```bash
NEXT_PUBLIC_CHATGPT_API_KEY=your-openai-api-key
STRIPE_SECRET_KEY=your-stripe-secret-key
DATABASE_URL=your-postgres-database-url
NEXT_PUBLIC_VERCEL_BLOB_TOKEN=your-vercel-blob-token
```

### 4. Run the development server

```bash
npm run dev
```
Visit http://localhost:3000 to view the app.

---

## 🧪 Testing Checklist
✅ Multi-step form validation

✅ Add/remove form sections dynamically

✅ Reorder with drag-and-drop

✅ AI fill feature works with your API key

✅ Successful Stripe payment flow

✅ PDF exports correctly

✅ Auto-save and restore works

✅ Responsive layout on mobile

---

### 🙌 Acknowledgments
1. OpenAI

2. Stripe

3. Shadcn UI

4. Vercel Blob

5. React Hook Form

6. dnd-kit

7. Prisma


