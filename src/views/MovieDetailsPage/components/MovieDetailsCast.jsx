import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../../servises/movieApi';

export default function MovieDetailsCast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    console.log('useEffect :>> MovieDetailsCast');
    fetchMovie.cast(movieId).then(({ cast }) => setActors(cast));
  }, [movieId]);

  return (
    <Row gutter={0}>
      {actors?.map(({ id, name, character, profile_path }) => (
        <Col span={6} key={id}>
          <Card style={{ height: '100%' }}>
            <Card.Meta
              avatar={
                profile_path ? (
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  />
                ) : (
                  <Avatar icon={<UserOutlined />} />
                )
              }
              title={name}
              description={`Character: ${character}`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
