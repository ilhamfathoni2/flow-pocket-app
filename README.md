# Project Structure
```
📦 flow-pocket-app
├── 📂 android
├── 📂 ios
├── 📂 build-app
├── 📂 env
│   ├── 📂 dev
│   │   └── 📂 api.dev.ts
│   ├── 📂 prod
│   │   └── 📂 api.prod.ts
│   ├── 📂 api.ts
├── 📂 src
│   ├── 📂 assets
│   │   ├── 📂 fonts
│   │   ├── 📂 icons
│   │   └── 📂 images
│   ├── 📂 components
│   │   ├── 📂 charts
│   │   │   ├── LineChart.tsx
│   │   │   ├── PieChart.tsx
│   │   │   └── BarChart.tsx
│   │   ├── 📂 forms
│   │   │   └── Form.tsx
│   │   └── 📂 ui
│   │       └── SomeUI.tsx
│   ├── 📂 configs
│   │   └── otherConfig.ts
│   ├── 📂 screens
│   │   ├── 📂 Home
│   │   │   └── HomeScreen.tsx
│   │   ├── 📂 TrxHistory
│   │   │   └── TrxHistoryScreen.tsx
│   │   ├── 📂 SplashScreen
│   │   │   └── SplashScreen.tsx
│   │   ├── 📂 Menu
│   │   │   └── MenuScreen.tsx
│   ├── 📂 store
│   │   └── index.ts
│   ├── 📂 services
│   │   └── api.ts
│   ├── 📂 utils
│   │   └── formatCurrency.ts
│   ├── 📂 navigation
│   │   ├── 📂 AppNavigator.tsx
│   │   ├── 📂 BottomTabNavigator.tsx
│   │   ├── 📂 RootStack.tsx
│   │   └── 📂 types.tsx
├── 📜 App.tsx
├── 📜 index.tsx
├── 📜 tamagui.config.ts
├── 📜 prepare-env.js
├── 📜 move-apk.js
├── 📜 .eslintrc.js
├── 📜 .gitignore
├── 📜 .prettierrc
├── 📜 babel.config.js
├── 📜 metro.config.js
├── 📜 package.json
├── 📜 README.md
└── 📜 tsconfig.json
```
# Flow Pocket - Project Setup

Welcome to the **Flow Pocket** project! This guide will help you set up and run the project smoothly.

## 🚀 Prerequisites
Before you begin, ensure you have the following installed:
- **React Native 0.76**
- **Node.js** (18 or Latest LTS recommended) → [Download here](https://nodejs.org/)
- **Yarn** (Recommended over npm) → [Install here](https://yarnpkg.com/)
- **Android Studio** (for Android development) → [Download here](https://developer.android.com/studio)
- **Xcode** (for iOS development, macOS only) → [Download here](https://developer.apple.com/xcode/)
- **CocoaPods** (for iOS dependencies, macOS only)
  ```sh
  sudo gem install cocoapods or from brew
  ```

## 📦 Installation
Clone the repository and install dependencies:

```sh
git clone https://github.com/ilhamfathoni2/flow-pocket-app.git
cd flow-pocket-app
yarn install
```

## 🎯 Running the Project

### 1️⃣ Start Metro Bundler
Run Metro, the JavaScript bundler for React Native:
```sh
yarn start
```

### 2️⃣ Run on Android
Ensure an emulator or physical device is connected, then execute:
```sh
yarn android
```

### 3️⃣ Run on iOS (macOS only)
For iOS, install dependencies and run the project:
```sh
cd ios && pod install && cd ..
yarn ios
```

## 🛠 Troubleshooting

### Metro Bundler Issues
If you encounter errors, try:
```sh
yarn start --reset-cache
```

### Android Build Issues
Ensure **Android SDK** is installed and run:
```sh
cd android && ./gradlew clean && cd ..
```

### iOS Build Issues
Check if **Xcode Command Line Tools** are installed:
```sh
sudo xcode-select --install
```

## 🔥 Useful Commands
- **Clean cache:**
  ```sh
  yarn cache clean
  ```
- **Run ESLint:**
  ```sh
  yarn lint
  ```
- **Format code with Prettier:**
  ```sh
  yarn format
  ```

## 📄 License
This project is licensed under the **MIT License**.

---

Happy coding! 🚀


