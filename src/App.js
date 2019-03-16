import React, { Component } from "react";
import Todolist from "./Todolist";
import InputForm from "./InputForm";
import "./css/App.css";


export default class App extends Component {

  //データを設定
  constructor() {
    super();
    const todos = [
      {
        id: 1,
        date: "2019/02/24",
        title: "研究室に行く",
        content: "スライド修正",
        check: false
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
        content: "髪を切る",
        check: true
      }
    ]

    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    }
  }

  // フォームに入力された値を取り出す関数
  handleSubmit(e) {
    e.preventDefault();
    // e.target.(name属性).valueでフォームの中身を取り出す
    const title = e.target.title.value;
    const content = e.target.content.value;

    // constructorから値を取り出し
    const todos = this.state.todos.slice() //全部の要素を新しい配列としてコピー
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      content: content,
      check: false
    });

    //setStateでstateの更新を行う
    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    e.target.title.value = "";
    e.target.content.value = "";
  }

  // レンダリング表示
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <InputForm handleSubmit={this.handleSubmit.bind(this)} />
        <Todolist todos={this.state.todos} />
      </div>
    );
  }
}
