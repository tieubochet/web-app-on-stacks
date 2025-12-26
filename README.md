## 🚀 Features

* **Next.js 14 (App Router)**: Modern React framework.
* **Reown AppKit**: Unified interface for connecting wallets.
* **Leather Wallet Support**: Specifically configured to detect and connect to Stacks (STX) addresses.
* **Network Handling**: Logic to detect and handle Bitcoin vs. Stacks network context.
* **Tailwind CSS**: Responsive and modern UI.

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/)
* [Reown AppKit](https://docs.reown.com/appkit/overview)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tieubochet/web-app-on-stacks.git
    cd <your-project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *Note: This project uses a `.npmrc` file to handle peer dependency conflicts common in Web3 packages.*

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your Reown Project ID:
    ```env
    NEXT_PUBLIC_PROJECT_ID=your_reown_project_id_here
    ```
    *You can get a Project ID at [cloud.reown.com](https://cloud.reown.com).*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## ⚠️ Important Note for Leather Wallet Users

If you encounter an error saying **"This account is already linked"** or **"Connection declined"**:

1.  Open your **Leather Wallet Extension**.
2.  Go to **Settings** -> **Connected Apps** (or Manage Apps).
3.  **Remove/Disconnect** the connection for `localhost` or the deployment domain.
4.  Reload the page and try connecting again.

## 🚀 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the repository in Vercel.
3.  Add the `NEXT_PUBLIC_PROJECT_ID` in the Vercel **Environment Variables** settings.
4.  Deploy.

## 🤝 Contribution

Feel free to fork this repo and submit pull requests.
