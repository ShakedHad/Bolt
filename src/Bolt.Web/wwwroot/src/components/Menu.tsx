/* eslint-disable react/no-array-index-key */
import {
  Card, Col, Collapse, Row, Space,
} from 'antd';
import _ from 'lodash';
import React, { FC, Fragment } from 'react';
import { Restaurant } from '../models/Restaurant';

const { Panel } = Collapse;
const { Meta } = Card;

interface MenuProps {
  restaurant: Restaurant;
}

const Menu: FC<MenuProps> = ({ restaurant }) => {
  const { menu } = restaurant;
  return (
    <>
      <Space direction="vertical">
        <Collapse defaultActiveKey={[..._.range(menu.categories.length)]}>
          {
          menu.categories.map((category, index) => (
            <Fragment key={category.id}>
              <Panel key={index} header={category.name}>
                <Row gutter={[16, {
                  xs: 8, sm: 16, md: 24, lg: 32,
                }]}
                >
                  {
                  category.items.map((item) => (
                    _.range(2).map(() => (
                      <Col key={item.id} xxl={6} xl={8} lg={12} md={12} sm={24}>
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
                    ))))
                }
                </Row>
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
