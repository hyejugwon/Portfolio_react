import React, { Component } from 'react';
import Clock from 'react-live-clock';
 
class LiveClockTest extends Component {
    render() {
        return (
            <div>
                {/* format 부분에서 원하는 날짜 형식으로 변경 가능, 타임존 변경 가능*/}
                <Clock format={'HH : mm : ss'} ticking={true}/>
            </div>
        )
    }
}
 
export default LiveClockTest;
