import "./App.css";
import { Stars } from "../challenges/week-1/Stars"; /* <Stars rows={7} columns={20}/> */
import { BreakingNews } from "../challenges/week-2/BreakingNews";
import { ConfirmationModal } from "../challenges/week-3/ConfirmationModal";
import { InteractiveProductCard } from "../challenges/week-4/InteractiveProductCard";
import { WebsiteProject } from "../challenges/week-5/WebsiteProject";
import { DarkMode } from "../challenges/week-7/DarkMOde";

function App() {
  return (
    <div className="mainDiv">
      <DarkMode />
    </div>
  );
}

export default App;

/* function App() {

  const buttons = 5;

  const numbers = Array.from({length: buttons}, (_, index) => index + 1)
  console.log(numbers);

  return (

      <div className='mainDiv'>
        <h1>Weekly Javascript Challenge</h1>
        <div className='buttonBox'>
          {numbers.map((number, index) => (
            <Button key={index} number={number} />
          ))}
        </div>
        <div className='challenge'>
          <WebsiteProject />
        </div>
      </div>
  )
}

export default App */
