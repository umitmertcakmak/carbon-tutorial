import React, { Fragment } from 'react';
import * as d3 from 'd3';
import * as d3Annotation from 'd3-svg-annotation';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

function RandomData() {
  const data = [...Array(100)].map((e, i) => {
    return {
      x: Math.random() * 40,
      y: Math.random() * 40,
      temparature: Math.random() * 500,
    };
  });
  return data;
}

class ScatterPlotComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //states
    };
    console.log(
      'scatterplot constructor: ',
      this.props.predictionOutcome,
      this.props.predictionProbability
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update.');
    console.log(
      'orediction data: ',
      this.props.predictionOutcome,
      this.props.predictionProbability
    );

    let predictionProbability = this.props.predictionProbability;

    let xCoord =
      this.props.predictionOutcome === 'Rejected'
        ? 120 - predictionProbability
        : 120 + predictionProbability;

    const numberAnnotation = [
      {
        note: {
          label: predictionProbability.toString() + '%',
          align: 'middle',
        },
        x: xCoord,
        y: 75,
        dy: 10,
        dx: 0,
        type: d3Annotation.annotationCalloutElbow,
        connector: { end: 'arrow' },
      },
    ];

    const makeNumberAnnotations = d3Annotation
      .annotation()
      .annotations(numberAnnotation);

    d3.selectAll('g.annotations').remove();

    d3.select('#confidence-bar-plot')
      .append('g')
      .call(makeNumberAnnotations);
  }

  componentDidMount() {
    console.log('component did mount.');
    console.log(
      'orediction data: ',
      this.props.predictionOutcome,
      this.props.predictionProbability
    );

    let predictionProbability = this.props.predictionProbability;

    let xCoord =
      this.props.predictionOutcome === 'Rejected'
        ? 120 - predictionProbability
        : 120 + predictionProbability;

    const numberAnnotation = [
      {
        note: {
          label: predictionProbability.toString() + '%',
          align: 'middle',
        },
        x: xCoord,
        y: 75,
        dy: 10,
        dx: 0,
        type: d3Annotation.annotationCalloutElbow,
        connector: { end: 'arrow' },
      },
    ];

    const makeNumberAnnotations = d3Annotation
      .annotation()
      .annotations(numberAnnotation);

    d3.select('#confidence-bar-plot')
      .append('g')
      .call(makeNumberAnnotations);
  }

  render() {
    const data = RandomData(),
      w = 240,
      h = 100,
      margin = {
        top: 5,
        bottom: 5,
        left: 20,
        right: 20,
      };

    const barData = [
      {
        x: 10,
        y: 20,
        width: this.props.predictionProbability,
        sign: this.props.predictionOutcome === 'Rejected' ? 'n' : 'p',
      },
      {
        x: 10,
        y: 20,
        width: 1 - this.props.predictionProbability,
        sign: this.props.predictionOutcome === 'Rejected' ? 'p' : 'n',
      },
    ];

    const width = w - margin.right - margin.left,
      height = h - margin.top - margin.bottom;

    const xScale = scaleLinear()
      .domain(extent(data, d => d.x))
      .range([0, width]);

    console.log('xScale: ', xScale(barData));

    const yScale = scaleLinear()
      .domain(extent(data, d => d.y))
      .range([height, 0]);

    const confidenceBar = barData.map((d, i) => (
      <Fragment>
        <rect
          key={i}
          x={d.sign === 'n' ? 0 : width / 2}
          y={yScale(d.y)}
          width={width / 2}
          height={20}
          style={d.sign === 'n' ? { fill: '#FFCFC4' } : { fill: '#C4E4BE' }}
        />
        <rect
          key={i}
          x={d.sign === 'n' ? width / 2 - d.width : width / 2}
          y={yScale(d.y)}
          width={d.width}
          height={20}
          style={d.sign === 'n' ? { fill: '#CC3366' } : { fill: '#99CC99' }}
        />

        {/*<rect key={i} x={width/2} y={height/2 - 5} width={1} height={30} />*/}

        <text x={0} y={height / 2 - 25} className="bx--label">
          {this.props.predictionOutcome}
        </text>
      </Fragment>
    ));

    return (
      <div>
        <svg id="confidence-bar-plot" width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            {confidenceBar}
          </g>
        </svg>
      </div>
    );
  }
}

export { ScatterPlotComponent };
