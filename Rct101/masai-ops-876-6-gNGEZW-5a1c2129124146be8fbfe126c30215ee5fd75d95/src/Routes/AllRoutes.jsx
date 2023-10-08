import Dashboard from "./Dashboard";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage"
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/restaurants/<id>" element={<SingleRestaurantPage/>}></Route>
        
      </Routes>

    </div>
  );
}

export default AllRoutes;
