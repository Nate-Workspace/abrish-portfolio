import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function VideoCard({ video }) {
  const [title, setTitle] = useState("Loading...");
  const [open, setOpen] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  // const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

  useEffect(() => {
    const cacheKey = `yt-title-${video.id}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      setTitle(cached);
      return;
    }
    async function fetchTitle() {
      try {
        const res = await fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.id}&format=json`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const fetchedTitle = data.title || "Untitled Project";
        setTitle(fetchedTitle);
        localStorage.setItem(cacheKey, fetchedTitle);
      } catch (err) {
        console.error("Error fetching video title:", err);
        setTitle("Untitled Project");
      }
    }
    fetchTitle();
  }, [video.id]);

  return (
    <>
      <article className="work-card">
        <button className="video-modal-btn" onClick={() => setOpen(true)} style={{background: "none", border: 0, padding: 0, width: "100%", cursor: "pointer"}} aria-label={`Play video: ${title}`}>
          <div className="thumb-wrapper">
            <img src={thumbnail} alt={title} className="work-thumb" />
            <span className="play-btn">▶</span>
          </div>
        </button>
        <h4>{title}</h4>
        <p>Video Project</p>
      </article>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal-video-frame">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}