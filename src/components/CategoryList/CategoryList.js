import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  return (
    <ul className={styles.CategoryList}>
      {categories.map(category => (
        <li
          key={category._id} // Use a unique identifier for the key
          className={category === activeCat ? styles.active : ''}
          onClick={() => setActiveCat(category.name)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
}
