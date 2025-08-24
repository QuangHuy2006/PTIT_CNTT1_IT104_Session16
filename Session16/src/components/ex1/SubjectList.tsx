import { Component } from "react";
interface Subject {
  id: number;
  name: string;
}

interface SubjectList {
  math: Subject[];
  vietnamese: Subject[];
  english: Subject[];
  chemistry: Subject[];
  science: Subject[];
  subjectToShow: Subject[];
}
export default class bai1 extends Component<object, SubjectList> {
  constructor(props: object) {
    super(props);
    this.state = {
      math: [
        { id: 1, name: "1 + 1 = ?" },
        { id: 2, name: "2 + 4 = ?" },
        { id: 3, name: "999 * 999 = ?" },
      ],
      vietnamese: [
        { id: 1, name: "Tắt Đèn" },
        { id: 2, name: "Vợ Nhặt" },
        { id: 3, name: "Chiếc Lược Ngà" },
      ],
      english: [
        { id: 1, name: "Ielts Listening" },
        { id: 2, name: "Toeic Test" },
        { id: 3, name: "Toefl Test" },
      ],
      chemistry: [
        { id: 1, name: "H + O2 -> ?" },
        { id: 2, name: "H2O + H2SO4 -> ?" },
        { id: 3, name: "CH3 + CH2COO4H2 -> ?" },
      ],
      science: [
        { id: 1, name: "Động vật" },
        { id: 2, name: "Lai giống" },
        { id: 3, name: "Thuyết tiến hóa" },
      ],
      subjectToShow: [],
    };
  }
  render() {
    const showMath = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const list = document.querySelectorAll<HTMLButtonElement>(".btn");
      list.forEach((l) => (l.style.display = "none"));
      this.setState({subjectToShow: [...this.state.math]});
      (document.querySelector("#subjectForShow") as HTMLUListElement).style.display = "block";
    };
    const showVietnamese = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const list = document.querySelectorAll<HTMLButtonElement>(".btn");
      list.forEach((l) => (l.style.display = "none"));
      this.setState({subjectToShow: [...this.state.vietnamese]});
      (document.querySelector("#subjectForShow") as HTMLUListElement).style.display = "block";
    };
    const showEnglish = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const list = document.querySelectorAll<HTMLButtonElement>(".btn");
      list.forEach((l) => (l.style.display = "none"));
      this.setState({subjectToShow: [...this.state.english]});
      (document.querySelector("#subjectForShow") as HTMLUListElement).style.display = "block";
    };
    const showChemistry = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const list = document.querySelectorAll<HTMLButtonElement>(".btn");
      list.forEach((l) => (l.style.display = "none"));
      this.setState({subjectToShow: [...this.state.chemistry]});
      (document.querySelector("#subjectForShow") as HTMLUListElement).style.display = "block";
    };
    const showScience = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const list = document.querySelectorAll<HTMLButtonElement>(".btn");
      list.forEach((l) => (l.style.display = "none"));
      this.setState({subjectToShow: [...this.state.science]});
      (document.querySelector("#subjectForShow") as HTMLUListElement).style.display = "block";
    };
    return (
      <div>
        <h1>Danh sách môn học</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button className="btn" onClick={showMath}>
            Toán
          </button>
          <button className="btn" onClick={showVietnamese}>
            Văn
          </button>
          <button className="btn" onClick={showEnglish}>
            Anh
          </button>
          <button className="btn" onClick={showChemistry}>
            Hóa
          </button>
          <button className="btn" onClick={showScience}>
            Sinh
          </button>
          <ul id="subjectForShow">
            {this.state.subjectToShow.map((subject) => (
              <li>
                bài {subject.id} : {subject.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
