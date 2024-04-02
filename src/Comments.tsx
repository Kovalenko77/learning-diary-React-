import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import CardComment from './CardComment';
import Loader from './Loader';
import { useTranslation } from 'react-i18next';

interface Comment {
  Title: string;
  Content: string;
}

interface CommentsResponse {
  data: Comment[];
}

const Comments = () => {
  const { t } = useTranslation();

  const [comments, setComments] = useState<Comment[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const refresh = useCallback(() => {
    setIsDataLoading(true);
    setHasError(false);
    fetch(
      'https://script.google.com/macros/s/AKfycbwDUdbK7tfJSy_UIOGBWpFPuDZ0qy8BBNZU3vP-SkXytRMvN0b0MUp8yf2MIADf_u5Rtg/exec'
    )
      .then((response) => {
        return response.json();
      })
      .then((data: CommentsResponse) => {
        setComments(data.data);
      })
      .catch((error) => {
        setHasError(true);
      })
      .finally(() => {
        setIsDataLoading(false);
      });
  }, []);

  useEffect(refresh, []);

  return (
    <>
      {isDataLoading ? <Loader /> : null}
      {hasError ? <p>{t('data_loading_error')}</p> : null}
      {hasError === false && isDataLoading === false && (
        <>
          {comments.length === 0 ? (
            <p>{t('no_comments')}</p>
          ) : (
            <Grid className="card-wrapper" container spacing={2}>
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
          )}
        </>
      )}
      <button className="refresh" onClick={refresh}>
        {t('refresh')}
      </button>
    </>
  );
};

export default Comments;
