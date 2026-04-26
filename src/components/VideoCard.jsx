import { useEffect, useState } from "react"

export default function VideoCard({ video }) {
  const [title, setTitle] = useState("Loading...")

  const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`

  useEffect(() => {
    const cacheKey = `yt-title-${video.id}`

    const cached = localStorage.getItem(cacheKey)
    if (cached) {
      setTitle(cached)
      return
    }

    // 2. Fetch if not cached
    async function fetchTitle() {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
        )

        if (!res.ok) throw new Error("Failed to fetch")

        const data = await res.json()

        const fetchedTitle = data.title || "Untitled Project"

        setTitle(fetchedTitle)

        localStorage.setItem(cacheKey, fetchedTitle)
      } catch (err) {
        console.error("Error fetching video title:", err)
        setTitle("Untitled Project")
      }
    }

    fetchTitle()
  }, [video.id])

  return (
    <article className="work-card">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        <div className="thumb-wrapper">
          <img src={thumbnail} alt={title} className="work-thumb" />
          <span className="play-btn">▶</span>
        </div>
      </a>

      <h4>{title}</h4>
      <p>Video Project</p>
    </article>
  )
}