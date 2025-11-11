import { Link } from 'react-router-dom';

const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];

const Menu = () => (
  <div>
    <h2>Menu Categories</h2>
    <ul>
      {categories.map(cat => (
        <li key={cat}>
          <Link to={`/menu/${cat}`}>{cat.toUpperCase()}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Menu;