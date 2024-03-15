import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CardComment from './CardComment';
import Loader from './Loader';

interface Comment {
  Title: string;
  Content: string;
}

interface CommentsResponse {
  data: Comment[];
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    setIsDataLoading(true);
    fetch(
      'https://script.google.com/macros/s/AKfycbwDUdbK7tfJSy_UIOGBWpFPuDZ0qy8BBNZU3vP-SkXytRMvN0b0MUp8yf2MIADf_u5Rtg/exec'
    )
      .then((response) => response.json())
      .then((data: CommentsResponse) => {
        setComments(data.data);
        setIsDataLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {isDataLoading && <Loader />}
      {<Grid className="card-wrapper" container spacing={2}>
          {comments.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={comments.indexOf(item)}>
              <CardComment
                key={index}
                title={item.Title}
                content={item.Content}
              />
            </Grid>
          ))}
        </Grid>
      }
    </>
  );
};

export default Comments;
