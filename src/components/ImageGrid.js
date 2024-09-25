// components/ImageGrid.js
export default function ImageGrid() {
  const images = [
    { src: "/api/placeholder/200/200", link: "https://example.com/1" },
    { src: "/api/placeholder/200/200", link: "https://example.com/2" },
    { src: "/api/placeholder/200/200", link: "https://example.com/3" },
    { src: "/api/placeholder/200/200", link: "https://example.com/4" },
    { src: "/api/placeholder/200/200", link: "https://example.com/5" },
    { src: "/api/placeholder/200/200", link: "https://example.com/6" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image.src}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        </a>
      ))}
    </div>
  );
}
