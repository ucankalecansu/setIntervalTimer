import Timer from "./Timer";
import Review from "./Review";

export default function App() {
  return (
    <div className="App">
      <h2>Welcome to Innovace Live Coding Experience</h2>
      <h3>Timer: </h3>
      <Timer startCount={10} />
      {/*<h3>Review: </h3>
      <Review /> */}
    </div>
  );
}
