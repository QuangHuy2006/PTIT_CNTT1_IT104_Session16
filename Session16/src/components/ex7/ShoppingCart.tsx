import { Component } from "react";
import "./style.css";
import Cart from "./../../assets/images/shopping-cart.png";
interface Phone {
  name: string;
  price: number;
  link: string;
  quantity?: number;
}
interface Display {
  list: Phone[];
  buying: Phone[];
}
export default class ShoppingCart extends Component<object, Display> {
  constructor(props: object) {
    super(props);
    this.state = {
      list: [
        {
          name: "Samsung Galaxy",
          price: 20000000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 20500000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 21000000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 21500000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 19000000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 13000000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 24000000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
        {
          name: "Samsung Galaxy",
          price: 20500000,
          link: "https://tse1.mm.bing.net/th/id/OIP.kqFvfVtxWN8HRREI2kGrOwHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        },
      ],
      buying: [],
    };
  }
  render() {
    const handleShow = (e: React.MouseEvent<HTMLImageElement>) => {
      e.stopPropagation();
      (document.querySelector("#buyWindow") as HTMLDivElement).classList.toggle(
        "show"
      );
    };
    return (
      <>
        <div id="header">
          <div id="headerLeft">
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
          </div>
          <div id="headerRight">
            <img
              src={Cart}
              alt="img"
              width="20px"
              height="20px"
              onClick={handleShow}
            />
          </div>
          <div id="buyWindow">
            <div>Cart</div>
            <div>
              {this.state.buying.map((phone) => (
                <div>
                  <div id="cartModel">
                    <img src={phone.link} width="20px" height="20px" />
                  </div>
                  <div>Điện thoại {phone.name}</div>
                  <div>
                    <button>+</button> {phone.quantity} <button>-</button>
                  </div>
                </div>
              ))}
            </div>
            <div>Tổng tiền: 000</div>
          </div>
        </div>
        <div id="content">
          <div id="phoneList">
            {this.state.list.map((phone) => (
              <div className="items">
                <div>
                  <img src={phone.link} width="250px" height="200px" />
                </div>
                <div>Điện thoại {phone.name}</div>
                <div>{phone.price} đ</div>
                <button>
                  <img src={Cart} alt="img" width="20px" height="20px" /> Thêm
                  vào giỏ hàng
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
