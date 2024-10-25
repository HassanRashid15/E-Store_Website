// App.js
import React, { useEffect, useState } from "react";
import Preloader from "./component/Preloader"; // Make sure this path is correct
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 9000)); // Simulate a delay
      setLoading(false);
    };
    fetchData();
  }, []);

  return <div>{loading ? <Preloader /> : <Content />}</div>;
};

// Example content to display after loading
const Content = () => {
  return (
    <div>
      <Navbar />
      <div className="content-adjustment">
        <h1>Data Loaded</h1>
        <p>This is the content that shows after the preloader.</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
