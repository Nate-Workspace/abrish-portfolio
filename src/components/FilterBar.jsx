export default function FilterBar({ active, setActive }) {
  const filters = ["all", "short", "podcast", "film", "corporate"];

  return (
    <div className="filter-bar">
      <span>Filter by: </span>
      {filters.map((filter) => (
        <button
          key={filter}
          className={active === filter ? "active" : ""}
          onClick={() => setActive(filter)}
        >
          {filter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
