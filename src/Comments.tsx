import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';

interface Comment {
  Title: string;
  Content: string;
}

interface CommentsResponse {
  data: Comment[];
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbwDUdbK7tfJSy_UIOGBWpFPuDZ0qy8BBNZU3vP-SkXytRMvN0b0MUp8yf2MIADf_u5Rtg/exec'
    )
      .then((response) => response.json())
      .then((data: CommentsResponse) => setComments(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="comments">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {comments.map((item, index) => (
          <Card key={index} title={item.Title} content={item.Content} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
