import { Component } from "react";
import "./style.css";
interface Click {
  isClick: boolean;
}
export default class ClickCounter extends Component<object, Click> {
  constructor(props: object) {
    super(props);
    this.state = {
      isClick: false,
    };
  }
  render() {
    const handleCLick = () => {
      this.setState({ isClick: !this.state.isClick });
      if (this.state.isClick === false) {
        document.body.classList.remove("lightThemeMode");
        (document.querySelector(":root") as HTMLDivElement).classList.remove("lightThemeMode");
      } else {
        document.body.classList.add("lightThemeMode");
        (document.querySelector(":root") as HTMLDivElement).classList.add(
          "lightThemeMode"
        );
      }
    };
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {this.state.isClick === false ? <>Chế độ tối</> : <>Chế độ sáng</>}
        <button onClick={handleCLick}>Click me</button>
      </div>
    );
  }
}
