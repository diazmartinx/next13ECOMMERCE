"use client";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const search = e.target[0].value;
          router.push("/search/" + search);
          e.target[0].value = "";
        }}
      >
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button type="submit" className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
