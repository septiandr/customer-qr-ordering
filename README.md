# Customer QR Ordering App 🍽️

A modern, accessible, and high-performance React Native application for customer self-ordering via QR code. Built with Expo, this app provides a seamless dining experience from scanning a table to tracking order progress.

## 🚀 Features

- **QR Code Scanning**: Seamlessly scan table QR codes to start ordering.
- **Dynamic Menu**: Browse categories, search for items, and view detailed descriptions.
- **Advanced Cart System**: Customizable items with price modifiers, quantity controls, and subtotal calculation.
- **Real-time Order Tracking**: Visual timeline of order status (Pending → Served).
- **i18n Support**: Multi-language support for **English** and **Chinese**.
- **Accessibility (a11y)**: Optimized for screen readers (VoiceOver/TalkBack) and dynamic font sizing.
- **Offline Support**: Robust caching with TanStack Query and persistence using AsyncStorage.
- **Smooth Animations**: Interactive UI feedback using React Native Reanimated.
- **Unit Tested**: Core logic and components verified with Jest and React Native Testing Library.

## 🛠️ Technology Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query) v5](https://tanstack.com/query/latest)
- **Styling**: React Native StyleSheet
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Internationalization**: [i18next](https://www.i18next.com/)
- **Testing**: [Jest](https://jestjs.io/) & [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## 🏗️ Architecture

The project follows a **Feature-based Architecture**, ensuring scalability and maintainability.

```text
src/
├── components/          # Shared global UI components (Loading, Error, etc.)
├── feature/             # Domain-driven features
│   ├── cart/            # Cart logic, store, and screens
│   ├── home/            # Dashboard and table management
│   ├── menu/            # Menu browsing and filtering
│   ├── order/           # Order placement and tracking
│   └── scan/            # QR Scanner implementation
├── lib/                 # Core libraries and configurations
│   ├── api/             # API client and endpoints
│   ├── i18n/            # Internationalization setup
│   └── query/           # React Query configuration
└── assets/              # Static assets (images, fonts)
```

### Key Architectural Patterns:
- **Zustand Stores**: Used for client-side state like `cart` and `currentTable`.
- **React Query**: Handles server state, caching, and background synchronization.
- **Custom Hooks**: Encapsulate business logic (e.g., `useMenuFilter`, `useCart`).
- **Atomic Design**: Components are broken down into small, reusable units.

## 🏁 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn
- [Expo Go](https://expo.dev/go) app on your mobile device (for testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/customer-qr-ordering.git
   cd customer-qr-ordering
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_API_URL=https://your-api-url.com
   EXPO_PUBLIC_USE_MOCK=true
   ```

### Running the App

Start the development server:
```bash
npx expo start
```

- **Android**: Press `a` or scan the QR code with Expo Go.
- **iOS**: Press `i` or scan the QR code with the Camera app.
- **Web**: Press `w` to open in the browser.

## 🧪 Testing

Run the unit tests using Jest:
```bash
npm test
```

To run tests in watch mode:
```bash
npm test -- --watch
```

## ♿ Accessibility & i18n

- **Screen Readers**: All interactive elements include `accessibilityLabel` and `accessibilityHint`.
- **Live Regions**: Dynamic updates like cart count are announced using `accessibilityLiveRegion`.
- **Dynamic Fonts**: Layouts use `minHeight` and flexible padding to support large system fonts.
- **Language Switcher**: Toggle between EN and ZH on the Home screen.

## 📄 License

This project is licensed under the MIT License.
