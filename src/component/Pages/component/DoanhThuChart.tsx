import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {  Line,Pie } from '@ant-design/plots';

export const DoanhThuChart = () => {
    const DemoLine = () => {

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
            width: 1407,
            height: 194,
            xField: 'date',
            yField: 'value',
            xAxis: {
                range: [0, 1],
                tickCount: 16,
            },
            fill: '#FF993C',
            fillOpacity: 0.5,
            color: '#FF993C',
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

        return <Line {...config} />;
    };

    return (
        <div id='doanhThuChart'>
            <DemoLine />
        </div>

    )
}

export const GoiGiaDinhPieChart = () => {
    const GiaDinhPie = () => {
        const data = [
                 {
                   type: 'Vé chưa sử dụng',
                   value: 13568,
                 },
                 {
                   type: 'Vé đã sử dụng',
                   value: 56024,
                 }
               ];
         const config = {
           appendPadding: 10,
           data,
           angleField: 'value',
           colorField: 'type',
           radius: 1,
           innerRadius: 0.4,
           label: {
             type: 'inner',
             offset: '0%',
             content: '{value}',
             style: {
               textAlign: 'center',
               fontSize: 14,
             },
           },
           interactions: [
             {
               type: 'element-selected',
             },
             {
               type: 'element-active',
             },
           ],
           statistic: {
             title: false,
             content: {
               style: {
                 whiteSpace: 'pre-wrap',
                 overflow: 'hidden',
                 textOverflow: 'ellipsis',
               },
               content: '',
             },
           },
         };
         return <Pie {...config} />;
       };

    return (
        <div id='giaDinhPieChart'>
            <GiaDinhPie />
        </div>

    )
}

export const GoiSuKienPieChart = () => {
    const DemoPie = () => {
        const data = [
          {
            type: 'Vé đã sử dụng',
            value: 56024,
          },
          {
            type: 'Vé chưa sử dụng',
            value: 13568,
          }
        ];
        const config = {
          appendPadding: 10,
          data,
          angleField: 'value',
          colorField: 'type',
          radius: 0.9,
          label: {
            type: 'inner',
            offset: '-30%',
            style: {
              fontSize: 14,
              textAlign: 'center',
            },
          },
          interactions: [
            {
              type: 'element-active',
            },
          ],
        };
        return <Pie {...config} />;
      };

    return (
        <div id='giaDinhPieChart'>
            <DemoPie />
        </div>

    )
}


