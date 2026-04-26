export default function FilterBar({ active, setActive }) {
  const filters = ["all", "film", "corporate", "podcast", "short"];

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
