import { NetWork } from "./Components";
import { RouterApp } from "./Router/RouterApp";
import { useNetwork } from "./hooks/useNetwork";

const App = () => {
  const isOnline = useNetwork();
  return isOnline ? <RouterApp data-testid="app" /> : <NetWork />;
};

export default App;
