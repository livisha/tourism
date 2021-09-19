import './App.css';
import ReviewList from "./components/ReviewList/reviewlist.js";
import Already_Given from "./components/already_given.js";

function App() {
  var already_given_feedback = false;
  return (
    <div className="App">
           {already_given_feedback ? (
          <Already_Given />
        ) : (
            <ReviewList />
        )}
    </div>
  );
}

export default App;
