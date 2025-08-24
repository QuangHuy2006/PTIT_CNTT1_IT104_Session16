import { Component } from 'react'
interface Click {
    count: number,
    isClick: boolean,
}
export default class ClickCounter extends Component<object, Click> {
    constructor(props: object){
        super(props);
        this.state = {
            count: 0,
            isClick: false,
        }
    }
  render() {
    const handleCLick = () => {
        this.setState({count: this.state.count + 1, isClick: true});
    }
    return (
      <div style={{display: "flex", flexDirection: "column"}}>
        {this.state.isClick === true ? <>Count: {this.state.count}</> : <>Count: 0</>}
        <button onClick = {handleCLick}>Click me</button>
      </div>
    )
  }
}
