import React from 'react';
// import { SimpleBarChart } from "@carbon/charts-react";
import '@carbon/charts/styles.css';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
  LabelList,
  Cell,
  Tooltip,
} from 'recharts';

class HBarChartComponent extends React.Component {
  render() {
    return (
      <div>
        {/*<p>{this.props.title}</p>*/}
        <BarChart
          width={500}
          height={250}
          data={this.props.data}
          layout="vertical">
          <XAxis type="number" hide />
          <YAxis type="category" dataKey="Factor" width={150} />
          <Tooltip />

          {/*<Bar label={{ position: 'insideLeft' }} dataKey="Weight"/>*/}

          <Bar dataKey="Weight" label={{ fill: 'black', fontSize: 12 }}>
            {this.props.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.Weight < 0 ? '#CC3366' : '#99CC99'}
              />
            ))}
          </Bar>
        </BarChart>

        <div className="bx--row claim-assessment__padding_3" />
      </div>
    );
  }
}

// class HBarChartComponent extends React.Component {
//
//   constructor() {
//     super();
//     this.state = {
//       positiveFactors: [
//         { name: 'Game/Equipment', positiveFactors: 0.0456 },
//         { name: 'Age Group', positiveFactors: 0.032 },
//         { name: 'Region', positiveFactors: 0.026 },
//         { name: 'Date', positiveFactors: 0.022 },
//       ],
//       negativeFactors: [
//         { name: 'a', negativeFactors: 0.0456 },
//         { name: 'b', negativeFactors: 0.032 },
//         { name: 'c', negativeFactors: 0.026 },
//         { name: 'd', negativeFactors: 0.022 },
//       ],
//     };
//   }
//
//   render () {
//     return (
//       <div>
//
//         <p>Positive Factors</p>
//         <BarChart width={500} height={150} data={this.state.positiveFactors} layout="vertical">
//
//           <XAxis type="number" hide />
//           <YAxis type="category" dataKey="name" width={150}/>
//           <Tooltip />
//           <Bar label dataKey="positiveFactors" fill="#1589FF"/>
//         </BarChart>
//
//         <div className="bx--row claim-assessment__padding_3" />
//
//
//         <p>Negative Factors</p>
//         <BarChart width={300} height={150} data={this.state.negativeFactors} layout="vertical">
//
//           <XAxis type="number" hide />
//           <YAxis type="category" dataKey="name" width={150}/>
//           <Tooltip />
//           <Bar label dataKey="negativeFactors" fill="#FF2400" />
//         </BarChart>
//       </div>
//     )
//   }
// }

// class HBarChartComponent extends React.Component {
//   state = {
//     data: {
//       "labels": [
//         "Age group",
//         "Item amount",
//         "Knives",
//         "Restocking",
//         "Misc"
//       ],
//       "datasets": [
//         {
//           "label": "Dataset 1",
//           "data": [
//             -65000,
//             29123,
//             35213,
//             51213,
//             16932
//           ]
//         }
//       ]
//     },
//     options: {
//       "axes": {
//         "left": {
//           "primary": true,
//           "scaleType": "labels",
//         },
//         "bottom": {
//           "secondary": true
//         }
//       },
//       "height": "400px"
//     }
//   };
//
//   render = () => (
//     <SimpleBarChart
//       data={this.state.data}
//       options={this.state.options}
//       width={3}
//     >
//     </SimpleBarChart>
//   );
// }

//
// function HBarChartComponent () {
//
//     let data = {
//       "labels": [
//         "Qty",
//         "More",
//         "Sold",
//         "Restocking",
//         "Misc"
//       ],
//       "datasets": [
//         {
//           "label": "Dataset 1",
//           "data": [
//             65000,
//             29123,
//             35213,
//             51213,
//             16932
//           ]
//         }
//       ]
//     };
//
//     let options = {
//       "title": "Simple horizontal bar (discrete)",
//       "axes": {
//         "left": {
//           "primary": true,
//           "scaleType": "labels"
//         },
//         "bottom": {
//           "secondary": true
//         }
//       },
//       "height": "400px"
//     };
//
//
//   return (
//     <SimpleBarChart
//       data={data}
//       options={options}>
//     </SimpleBarChart>
//   );
// }

export { HBarChartComponent };
