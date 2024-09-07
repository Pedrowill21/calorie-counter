import { DefaultLayout } from "./components/ui/layout/default";
import { AppRouter } from "./routes";

function App() {
  return (
    <DefaultLayout>
      <AppRouter />
    </DefaultLayout>
  );
}

export default App;
