import { Component } from 'react'
import "./style.css"
interface Status {
    isLogin: boolean,
}
export default class LoginStatus extends Component<object, Status> {
    constructor(props: object) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }
    render() {
    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      this.setState({isLogin: !this.state.isLogin});
    }
    return (
      <div style={{backgroundColor: "#FFFFFF", color: "#000000", padding: "40px", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2>{this.state.isLogin === false ? <>Vui lòng đăng nhập để tiếp tục</> : <>Xin chào, User</>}</h2>
        <button id="btn" onClick={handleChange}>{this.state.isLogin === false ? "Đăng nhập" : "Đăng xuất"}</button>
      </div>
    )
  }
}
