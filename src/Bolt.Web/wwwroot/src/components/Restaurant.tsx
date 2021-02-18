import {
  faClock,
  faLink, faMapMarkerAlt, faPhoneAlt, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Col, Row, Spin, Typography,
} from 'antd';
import { Guid } from 'guid-typescript';
import _, { rest } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FetchSelectedRestaurant } from '../actions';
import { RestaurantCategory } from '../models/RestaurantCategory';
import { StoreState } from '../reducers';
import Menu from './Menu';

interface ParamTypes {
  id?: string;
}

const { Paragraph, Title } = Typography;

const MarginIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  color: black
`;

const ThinMarginParagraph = styled(Paragraph)`
  margin-bottom: 0.5em
`;

const CenteredSpinner = styled(Spin)`
  margin: auto;
  width: 100%
`;

const Restaurant : FC = () => {
  const id = Guid.parse(useParams<ParamTypes>().id ?? '');
  const dispatch = useDispatch();
  const restaurant = useSelector((state : StoreState) => state.selectedRestaurant);
  const [loading, setLoading] = useState(true);
  console.log(restaurant);

  useEffect(() => {
    if (!id) return;
    dispatch(FetchSelectedRestaurant(id));
  }, []);

  useEffect(() => {
    debugger;
    if (restaurant?.id.equals(id)) setLoading(false);
  }, [restaurant]);

  return (
    <div>
      {
        loading
          ? <CenteredSpinner tip="Just a minute..." />
          : (
            <>
              <Row>
                <Col xxl={24} xl={24} md={24} sm={24} xs={24}>
                  <img
                    alt="cover"
                    src={restaurant?.imageUrl}
                    style={{
                      height: '30vh', objectFit: 'cover', width: '100%',
                    }}
                  />
                </Col>
              </Row>
              <Title>{restaurant?.name}</Title>
              <Title level={4}>{restaurant?.description}</Title>
              <Row>
                <Col xxl={6} xl={6} md={6} sm={4} xs={4}>
                  <Typography>
                    <ThinMarginParagraph>
                      <MarginIcon icon={faUtensils} />
                      {RestaurantCategory[restaurant!.category]}
                    </ThinMarginParagraph>
                    <ThinMarginParagraph>
                      <MarginIcon icon={faMapMarkerAlt} />
                      {restaurant?.address}
                    </ThinMarginParagraph>
                    <ThinMarginParagraph>
                      <MarginIcon icon={faPhoneAlt} />
                      {restaurant?.phoneNumber}
                    </ThinMarginParagraph>
                    <ThinMarginParagraph>
                      <MarginIcon icon={faLink} />
                      <a href={restaurant?.website}>{restaurant?.website}</a>
                    </ThinMarginParagraph>
                    <ThinMarginParagraph>
                      <MarginIcon icon={faClock} />
                      Opening Hours:
                      <ul>
                        {_.map(restaurant?.openingHours, (value, key) => (
                          <li key={key}>
                            {`${key}: ${value[0]?.toFormat('HH:mm')} - ${value[1]?.toFormat('HH:mm')}`}
                          </li>
                        ))}
                      </ul>
                    </ThinMarginParagraph>
                  </Typography>
                </Col>
                <Col xxl={18} xl={18} md={18} sm={20} xs={20}>
                  <Menu restaurant={restaurant!} />
                </Col>
              </Row>
            </>
          )
      }
    </div>
  );
};

export default Restaurant;
