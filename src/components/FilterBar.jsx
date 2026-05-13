export default function FilterBar({ active, setActive }) {
  const filters = [
    "all",
    "film",
    "podcast",
    "sports",
    "promo",
    "event",
    "documentary",
    "client",
  ]

  return (
    <div className="filter-bar">
      <span>Filter by:</span>

      {filters.map((filter) => (
        <button
          key={filter}
          className={active === filter ? "active" : ""}
          onClick={() => setActive(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}