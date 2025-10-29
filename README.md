# 📧 @onexnpm/email-sender

[![npm version](https://img.shields.io/npm/v/@onexnpm/email-sender.svg?color=blue)](https://www.npmjs.com/package/@onexnpm/email-sender)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Nodemailer](https://img.shields.io/badge/powered%20by-Nodemailer-orange)](https://nodemailer.com/)
[![License](https://img.shields.io/npm/l/@onexnpm/email-sender.svg)](LICENSE)

> A simple, lightweight wrapper for **Nodemailer** to send emails — fully configurable through environment variables.

---

## 🚀 Features

- ⚡ **Quick setup** — no extra config files required  
- 🔒 **Secure** — credentials loaded from `process.env`  
- 📦 **Minimal dependencies** (just Nodemailer + dotenv)  
- 🧩 **Works with any SMTP provider** (Zoho, Gmail, Outlook, etc.)  
- 💬 **Supports text or HTML emails**

---

## 📦 Installation

Install via npm or yarn:

```bash
npm install @onexnpm/email-sender
# or
yarn add @onexnpm/email-sender
```

---

## ⚙️ Configuration

Create a `.env` file in your project root:

```env
SMTP_HOST=smtp.email.com
SMTP_PORT=465
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
APP_NAME=YourAppName
```

💡 You can use **any SMTP provider** — not just Zoho — by changing the `SMTP_HOST` and `SMTP_PORT`.

---

## 💻 Usage

### 1️⃣ Simple Example

```js
import sendEmail from '@onexnpm/email-sender';

// Ensure your .env variables are loaded by your app first!
try {
  await sendEmail({
    to: 'user@example.com',
    subject: 'Hello from Email!',
    html: '<h1>Welcome to Our Service 🚀</h1><p>This is a test email.</p>'
  });
} catch (error) {
  console.error('Failed to send email:', error);
}
```

---

### 2️⃣ Using Named Import

```js
import { sendEmail } from '@onexnpm/email-sender';

const mailOptions = {
  to: 'recipient@example.com',
  subject: 'Password Reset Code',
  text: 'Your reset code is 123456',
};

await sendEmail(mailOptions);
```

---

### 3️⃣ Console Output Example

```bash
✅ Mailer is configured and ready to send emails.
📧 Email sent successfully: <b658f8a9b1f2e...@smtp.email.com>
```

---

### 🧩 Example Error Output

```bash
❌ Mailer configuration error: Invalid login
```

---

## 🧠 Environment Variables

| Variable     | Description                      | Example Value     |
| ------------- | -------------------------------- | ----------------- |
| `SMTP_HOST`   | SMTP server host                 | `smtp.zoho.com`   |
| `SMTP_PORT`   | SMTP server port                 | `465` or `587`    |
| `SMTP_USER`   | Email address for authentication | `your@zoho.com`   |
| `SMTP_PASS`   | SMTP app password                | `yourAppPassword` |
| `APP_NAME`    | Optional display name for sender | `My Company`      |

---

## 📂 Example Project Structure

```
project/
├── .env
├── index.js
├── package.json
└── node_modules/
```

---

## ⚙️ How It Works

- Uses **Nodemailer** internally  
- Reads SMTP configuration directly from `process.env`  
- Creates a reusable transporter on import  
- Sends emails using a single helper function: `sendEmail()`

---

## 🛠️ Requirements

- Node.js **v18+**  
- A valid **SMTP account** (Zoho, Gmail, Outlook, etc.)  
- Ensure your app loads environment variables (e.g., via `dotenv`)

---

## 🧰 Development

Clone the repo if you want to contribute:

```bash
git clone https://github.com/Seneth-Jayashan/email-sender.git
cd email-sender
npm install
```

---

## 🧑‍💻 Author

**Seneth Jayashan**  
🔗 [GitHub](https://github.com/Seneth-Jayashan)

---

## 📄 License

This project is licensed under the **ISC License** – see the [LICENSE](LICENSE) file for details.

---

## ⭐ Support

If you like this package, please consider giving it a ⭐ on [GitHub](https://github.com/Seneth-Jayashan/email-sender)!
