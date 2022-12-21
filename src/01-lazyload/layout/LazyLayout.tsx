import { Route, NavLink, Switch } from "react-router-dom"
import { LazyLoad1, LazyLoad2, LazyLoad3 } from "../pages"

const LazyLayout = () => {
  return (
    <div>
        <h1>Lazy Layout</h1>

        <ul>
            <li>
                <NavLink to="lazy1" className="text-white"><span className="text-white">Lazy 1</span></NavLink>
            </li>
            <li>
                <NavLink to="lazy2" className="text-white"><span className="text-white">Lazy 2</span></NavLink>
            </li>
            <li>
                <NavLink to="lazy3" className="text-white"><span className="text-white">Lazy 3</span></NavLink>
            </li>
        </ul>

        <Switch>
            <Route path="lazy1">
                <LazyLoad1/>
            </Route>
        </Switch>
    </div>
  )
}

export default LazyLayout