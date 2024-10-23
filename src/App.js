import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);


  return (
    <div className="App">
      <h1>Cat Cards</h1>
      <p>Iamgens e Text</p>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-right">
              <h2>Nome:{cat.name}</h2>
              <h5>Temperament:{cat.temperament}</h5>
              <p>Descrição:{cat.description}</p>
              <p>Origem:{cat.origin}</p>
            </div>
          </div>
        ))}
      </div>
      <button>VIEW</button>
    </div>
  );
}

export default App;
