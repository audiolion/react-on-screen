import React from 'react';
import ReactDOM from 'react-dom';
import TrackVisibility from './lib/index';



const PlaceHolder = (props) => {
  const style = {
    background: props.isVisible ? 'blue' : 'red',
    minWidth: '300px',
    minHeight: '300px',
    display: 'inline-block',
  };
  return <span style={style} {...props} >{props.partialVisibility ? 'PARTIAL VISIBILITY' : ''}</span>
}


const App = () => {
  return (
    <div>
      <div style={{display: 'flex', flexWrap: 'nowrap'}}>
        <TrackVisibility partialVisibility={true} style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder id='test2' partialVisibility={true} />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility partialVisibility={true} style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder partialVisibility={true} />
        </TrackVisibility>
      </div>
      <div>
        <TrackVisibility name={'WTF'} partialVisibility={true} style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder partialVisibility={true} id="test" />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
        <TrackVisibility style={{display: 'inline', margin: '2em'}}>
          <PlaceHolder />
        </TrackVisibility>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
