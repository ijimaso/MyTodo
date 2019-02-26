import React, { Component } from "react";
import Todolist from "./Todolist";
import "./css/App.css";

export default class App extends Component {

  //データを設定
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          date: "2019/02/24",
          title: "研究室に行く",
          content: "スライド修正"
        },
        {
          id: 2,
          date: "2019/02/27",
          title: "ゼミ",
          content: "10:30から"
        },
        {
          id: 3,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 4,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 5,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 6,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 7,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 8,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        },
        {
          id: 9,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る"
        }
      ]
    };
  }

  // レンダリング表示
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todolist todos={this.state.todos} />
      </div>
    );
  }
}
