
import "./App.css";
import { MyRoutes } from "./routers/routes";
function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬Uriel Peliculas</h1>
        <section className="portada" >
          <div></div>
        </section>

      </header>
      <MyRoutes />
      
    </div>
  );
}

export default App;