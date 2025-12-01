# EV Life EV Matchmaker

**EV Life EV Matchmaker** is an interactive web application designed to help prospective electric vehicle buyers in Australia find their perfect EV match. By answering a few simple questions about driving habits, budget, and lifestyle, users receive a tailored recommendation with specific model suggestions available in the Australian market.

## Features

-   **Smart Recommendation Engine**: Scores user inputs against EV categories (City, Sedan, SUV, Luxury, Performance, Budget, Range).
-   **Australian Localization**: tailored for the Aussie market with distance in km, local pricing (AUD), and available models (BYD, MG, Tesla, etc.).
-   **Modern Design**: A clean, light-themed UI with glassmorphism effects and smooth animations.
-   **Responsive**: Fully optimized for mobile, tablet, and desktop devices.
-   **Helpful Resources**: Includes tips for budget buyers (second-hand market) and links to trusted industry bodies like the AAA and EVC.

## Tech Stack

-   **Framework**: React + Vite
-   **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
-   **Deployment**: Cloudflare Pages

## Running Locally

To run this project on your local machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/halans/ev-quiz
    cd ev-quiz
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in browser**:
    Navigate to `http://localhost:5173` (or the URL shown in your terminal).

## Deployment to Cloudflare Pages

This project is configured for easy deployment on **Cloudflare Pages**.

### Prerequisites
-   A Cloudflare account.
-   This project pushed to a GitHub/GitLab repository.

### Steps

1.  **Log in to Cloudflare Dashboard** and go to **Workers & Pages**.
2.  Click **Create Application** > **Pages** > **Connect to Git**.
3.  Select your repository (`ev-quiz`).
4.  **Configure the build settings**:
    -   **Framework Preset**: `Vite` (or `Create React App` usually works, but manual settings are safer)
    -   **Build Command**: `npm run build`
    -   **Build Output Directory**: `dist`
5.  Click **Save and Deploy**.

Cloudflare will automatically build and deploy your site. Any future pushes to the `main` branch will trigger a new deployment.

Built with Google Antigravity.
