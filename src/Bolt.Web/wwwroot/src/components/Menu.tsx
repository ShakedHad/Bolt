/* eslint-disable react/no-array-index-key */
import {
  Card, Col, Collapse, Row, Space, Typography,
} from 'antd';
import _ from 'lodash';
import React, { FC, Fragment } from 'react';
import { Restaurant } from '../models/Restaurant';

const { Panel } = Collapse;
const { Meta } = Card;
const { Text, Title } = Typography;

interface MenuProps {
  restaurant: Restaurant;
}

const Menu: FC<MenuProps> = ({ restaurant }) => {
  const { menu } = restaurant;
  return (
    <>
      <Space direction="vertical">
        <Collapse defaultActiveKey={[..._.range(menu.categories.length)]} ghost>
          {
          menu.categories.map((category, index) => (
            <Fragment key={category.id.toString()}>
              <Panel
                key={index}
                header={
                  <Title level={4}>{category.name}</Title>
                }
              >
                <Space direction="vertical">
                  <Row>
                    <Text type="secondary">{category.description}</Text>
                  </Row>
                  <Row gutter={[16, {
                    xs: 8, sm: 16, md: 24, lg: 32,
                  }]}
                  >
                    {
                  category.items.map((item) => (
                    <Col key={item.id.toString()} xxl={6} xl={8} lg={12} md={24} sm={24}>
                      <Card
                        hoverable
                        cover={
                          <img src={item.imageUrl} alt="cover" />
                        }
                        type="inner"
                      >
                        <Meta description={item.description} title={item.name} />
                      </Card>
                    </Col>
                  ))
                }
                  </Row>
                </Space>
              </Panel>
            </Fragment>
          ))
        }
        </Collapse>
      </Space>
    </>
  );
};

export default Menu;
