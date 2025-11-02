import React, { useEffect, useState } from "react";
import "./Dailynews.css";

const DailyNews = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 news by default

  useEffect(() => {
    // Fetch data from your friend's backend API
    fetch("http://localhost:5000/api/news")
      .then((response) => response.json())
      .then((data) => {
        // Sort by date (latest first)
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNews(sorted);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="daily-news">
      <h2 className="news-title">Latest News</h2>

      {news.length === 0 ? (
        <p className="no-news">No news available at the moment.</p>
      ) : (
        <>
          <div className="news-grid">
            {news.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="news-card">
                <div className="news-image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="news-image"
                  />
                </div>
                <div className="news-content">
                  <h3 className="news-heading">{item.title}</h3>
                  <p className="news-text">{item.content}</p>
                  <p className="news-date">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < news.length && (
            <div className="show-more-container">
              <button className="show-more-btn" onClick={handleShowMore}>
                Show More News
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DailyNews;
