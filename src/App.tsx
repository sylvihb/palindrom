import "bootstrap/dist/css/bootstrap.min.css";
import AddPerson from "./components/AddPerson";
import FindPerson from "./components/FindPerson";
import PersonerList from "./components/PersonerList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4 border border-primary">
          <FindPerson />
        </div>
        <div className="col-sm-8 col-md-7 py-4 border border-primary">
          <AddPerson />
        </div>
        <div className="col-sm-8 col-md-7 py-4 border border-primary">
          <PersonerList />
        </div>
      </div>
    </div>
  );
}

export default App;
