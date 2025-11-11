import { useParams, useNavigate } from 'react-router-dom';
import menuData from '../data/menuData';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dishes = menuData[category.toLowerCase()];

  if (!dishes) return <p>Category not found.</p>;

  return (
    <div>
      <h2>{category.toUpperCase()} Dishes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {dishes.map((dish, index) => (
          <div key={index} style={{ width: '200px', textAlign: 'center' }}>
            <img
              src={dish.image}
              alt={dish.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/menu')} style={{ marginTop: '20px' }}>
        Back to Menu
      </button>
    </div>
  );
};

export default CategoryPage;   