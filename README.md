# Voodoo

![Alt](https://repobeats.axiom.co/api/embed/ded3735eb810e604dd95eed23e258a7ba2f34edc.svg "Voodoo")

## Overview

Voodoo is a simple, elegant web application that extracts URLs from projects on [base.org/ecosystem](https://base.org/ecosystem). It provides an easy way to view and copy all URLs from the ecosystem data.

## Features

- Displays extracted URLs in a clean, readable format
- Allows one-click copying of all URLs
- Supports dark mode (based on system preferences)
- Responsive design that works on both desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/wbnns/voodoo.git
   cd voodoo
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Usage

- When you open the app, it automatically fetches and displays the URLs from the Base ecosystem JSON file.
- To copy all URLs, click the "Copy All" button.
- To refresh the data, click the "Refresh Data" button.

## Deployment

To deploy your app to Vercel:

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign in.
3. Click "New Project" and import your GitHub repository.
4. Follow the prompts to deploy your app.

## Built With

- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
