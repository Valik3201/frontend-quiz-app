import { AnimatePresence } from "framer-motion";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <AnimatePresence mode="wait">
          <Layout />
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
