
# React Query Demo

This project demonstrates advanced data fetching, caching, and updating using **React Query** in a React application. It fetches data from the JSONPlaceholder API and showcases efficient API interactions with improved user experience through caching and on-demand refetching.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kolins1/alx-fe-reactjs.git
    cd react-query-demo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

---

## Usage

- The app fetches a list of posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
- It uses **React Query** to manage data fetching, caching, and state updates.
- Users can view posts and trigger a data refetch by interacting with a button.

---

## Features

- **Data Fetching & Caching:** Uses `useQuery` to fetch and cache data efficiently.
- **Automatic Refetching:** Data can be refetched on demand with a simple button click.
- **Optimized User Experience:** Cached data is displayed instantly on revisits.
- **Responsive Design:** The layout adjusts for various screen sizes using Tailwind CSS.

---

## Technologies Used

- **React**: Frontend library for building the UI.
- **React Query**: For handling data fetching and state management.
- **Tailwind CSS**: For styling the components.
- **Vite**: Development tool for fast builds and hot reloading.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
