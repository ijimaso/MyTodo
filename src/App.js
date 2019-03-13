import React, { Component } from "react";
import Todolist from "./Todolist";
import InputForm from "./InputForm";
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
          content: "スライド修正",
          check:false
        },
        {
          id: 2,
          date: "2019/02/27",
          title: "ゼミ",
          content: "10:30から",
          check: false
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
          content: "髪を切る",
          check: true
        },
        {
          id: 5,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る",
          check: false
        },
        {
          id: 6,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る",
          check: true
        },
        {
          id: 7,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る",
          check: false
        },
        {
          id: 8,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る",
          check: true
        },
        {
          id: 9,
          date: "2019/02/28",
          title: "美容院に行く",
          content: "髪を切る",
          check: false
        }
      ]
    };
  }

  // レンダリング表示
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <InputForm />
        <Todolist todos={this.state.todos} />
      </div>
    );
  }
}
