export default function Pagination({ current, total, onPageChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={current === page ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  )
}