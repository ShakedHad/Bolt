import {
  Card, Col, Row, Spin,
} from 'antd';
import { plainToClass } from 'class-transformer';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchRestaurants } from '../actions';
import { Restaurant } from '../models/Restaturant';
import { StoreState } from '../reducers';

const { Meta } = Card;

const RestaurantsList: FC = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state: StoreState) => state.restaurants);
  useEffect(() => {
    dispatch(FetchRestaurants());
  }, []);

  console.log(plainToClass(Restaurant, restaurants));
  return (
    <div>
      <Row gutter={[16, {
        xs: 8, sm: 16, md: 24, lg: 32,
      }]}
      >
        {

        !restaurants || !restaurants.length
          ? (
            <Spin tip="Loading..." style={{ margin: 'auto' }} />
          )
          : (restaurants.map((restaurant: Restaurant) => (
            <Col sm={12} md={8} lg={6} xl={4} key={restaurant.id}>
              <Card
                hoverable
                cover={
                  <img src={restaurant.imageUrl} alt="cover" />
            }
              >
                <Meta description={restaurant.description} title={restaurant.name} />
              </Card>
            </Col>
          )))
      }
      </Row>
    </div>
  );
};

export default RestaurantsList;
