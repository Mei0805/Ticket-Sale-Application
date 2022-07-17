import { Area } from '@ant-design/plots';
import {Chart as ChartJS, Tooltip,Title, ArcElement,Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(Tooltip,Title, ArcElement,Legend); 

export const DoanhThuChart = () => {
  const DoanhThu = () => {
    const data = [
      {
        "date": "Thứ 2",
        "value": 140
      },
      {
        "date": "Thứ 3",
        "value": 180
      },
      {
        "date": "Thứ 4",
        "value": 185
      },
      {
        "date": "Thứ 5",
        "value": 250
      },
      {
        "date": "Thứ 6",
        "value": 220
      },
      {
        "date": "Thứ 7",
        "value": 200
      },
      {
        "date": "CN",
        "value": 190
      },

    ];
    const config = {
      data,
      height: 194,
      xField: 'date',
      yField: 'value',
      xAxis: {
        range: [0, 1],
        // tickCount: 16,
      },
      smooth: true,
      line: {
        color: '#FF993C',
        size: 2,
        height: 400,
      },
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#ffffff 0.5:rgb(255 153 60 / 79%) 1:#FF993C',
          height: 300,
        };
      },
    };

    return <Area {...config} />;
  };

  return (
    <div id='doanhThuChart'>
      <DoanhThu />
    </div>

  )
}

export const GoiGiaDinhPieChart = () => {
  const dataFamily = {
    labels: [],
    datasets: [{
      height: 194,
      label: 'Gói gia đình',
      data: [13568,56024],
      backgroundColor: ['#FF8A48','#4F75FF'],
      hoverOffset: 2
    }]
  };
  return <Doughnut data={dataFamily}/>
    
}

export const GoiSuKienPieChart = () => {
  const dataEvent = {
    labels: [],
    datasets: [{
      
      label: 'Gói sự kiện',
      data: [30256,28302],
      backgroundColor: ['#FF8A48','#4F75FF'],
      hoverOffset: 2
    }]
  };
  return <Doughnut data={dataEvent}/>
}


