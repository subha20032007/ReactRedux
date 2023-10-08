import "./App.css";
import useOnlineStatus from "./hooks/useOnlineStatus";
import useTimeout from "./hooks/useTimeout";

function App() {
  // bring useTimeout hook here
  const { ready } = useTimeout( 5000 )
 
  // bring useOnlineStatus hook here
const isUserOnline=useOnlineStatus()
//console.log(ready)
//console.log("isUserOnline",isUserOnline)
  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {ready&&
      <div data-testid="timeout-div">After the timeout</div>
      }
      <br />
      <h3>Online Status</h3>
      {isUserOnline&&
      <div data-testid="online-status">Online 🟢</div>}
          {!isUserOnline&& <div data-testid="offline-status">Offline 🔴</div>
      }
    
    </div>
  );
}


export default App;
