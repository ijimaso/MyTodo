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
        done: false
      },
      {
        id: 2,
        date: "2019/02/27",
        title: "ゼミ",
        content: "10:30から",
        done: false
      },
      {
        id: 3,
        date: "2019/02/28",
        title: "美容院に行く",
        content: "髪を切る",
        done: false
      }
    ]

    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    }
  }

  // フォームに入力された値から新しいTodoを作成するメソッド
  makeTodo(event) {
    event.preventDefault();

    // e.target.(name属性).valueでフォームの中身を取り出す
    const title = event.target.title.value;
    const content = event.target.content.value;

    // constructorから値を取り出し
    const todos = this.state.todos.slice() //全部の要素を新しい配列としてコピー
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      content: content,
      done: false
    });

    //setStateでstateの更新を行う
    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    event.target.title.value = "";
    event.target.content.value = "";
  }

  //完了/元に戻すボタンを押すと切り替わるメソッド
  switchStatus(clickTodo) {
    const todos = this.state.todos.slice(); //todos配列をコピー
    const selectedIndex = todos.findIndex(todo => {
      return todo.id === clickTodo.id;
    })
    const setTodo = todos[selectedIndex]
    setTodo.done = !setTodo.done;
    todos[selectedIndex] = setTodo;

    // 値を更新
    this.setState({ todos:todos })
  }

  // todoを削除するメソッド
  deleteTodo(clickTodo) {
    const todos = this.state.todos.slice();
    const deletedTodos = todos.filter(todo => {
      return todo.id !== clickTodo.id
    })

    this.setState({ todos:deletedTodos })
  }

  // レンダリング表示
  render() {
    return (
      <div className="App">
        <h1 id="title">Todo App</h1>
        <InputForm makeTodo={this.makeTodo.bind(this)} />
        <Todolist todos={this.state.todos} switchStatus={this.switchStatus.bind(this)} deleteTodo={this.deleteTodo.bind(this)} />
      </div>
    );
  }
}
