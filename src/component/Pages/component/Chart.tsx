import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {

  const data = [
    {
        "timePeriod": "Thứ 2",
        "value": 1
    },
    {
        "timePeriod": "Thứ 3",
        "value": 1.4
    },
    {
        "timePeriod": "Thứ 4",
        "value": 2
    },
    {
        "timePeriod": "Thứ 5",
        "value": 2.26
    },
    {
        "timePeriod": "Thứ 6",
        "value": 3.34
    },
    {
        "timePeriod": "Thứ 7",
        "value": 2.41
    },
    {
        "timePeriod": "CN",
        "value": 1.52
    },

];
  const config = {
    data,
    padding: 10,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return <Line {...config} />;
};
