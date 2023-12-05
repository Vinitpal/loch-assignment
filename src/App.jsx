import "./App.css";
import EmailSection from "./components/EmailSection";
import GetNotified from "./components/GetNotified";
import Testimonials from "./components/Testimonials";
import WatchWhales from "./components/WatchWhales";

function App() {
  return (
    <div className="home">
      <div className="left">
        <GetNotified />

        <WatchWhales />

        <Testimonials />
      </div>
      <div className="right">
        <EmailSection />
      </div>
    </div>
  );
}

export default App;
