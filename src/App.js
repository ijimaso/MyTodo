import React, { Component } from "react";
import Todolist from "./Todolist";
import InputForm from "./InputForm";
import "./css/App.css";


/**
 * Appコンポーネント
 * Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
 *
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {

  //データを設定
  constructor() {
    super();
    const todos = [
      {
        id: 1,
        title: "研究室に行く",
        content: "スライド修正",
        done: false
      },
      {
        id: 2,
        title: "ゼミ",
        content: "10:30から",
        done: false
      },
      {
        id: 3,
        title: "美容院に行く",
        content: "髪を切る",
        done: false
      }
    ]

    //状態(state)を保存
    this.state = {
      todos: todos,
      countTodo: todos.length + 1
    }
  }


  /**
   * フォームに入力された新しいTodoを作成するメソッド
   *
   * @param {*} event
   * @memberof App
   */
  makeTodo(event) {
    event.preventDefault();

    // event.target.(name属性).valueでフォームの中身を取り出す
    const title = event.target.title.value;
    const content = event.target.content.value;

    // constructorから値を取り出し
    const todos = this.state.todos.slice() //全部の要素を新しい配列としてコピー
    const countTodo = this.state.countTodo

    // 作成したTodoを配列todosに追加
    todos.push({
      id: countTodo,
      title: title,
      content: content,
      done: false
    });

    // setStateでstateの更新を行う
    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })

    // フォームの中身を空に再設定
    event.target.title.value = "";
    event.target.content.value = "";
  }

  /**
   * 完了/未完了ボタンを押すと切り替わるメソッド
   *
   * @param {*} clickTodo
   * @memberof App
   */
  switchStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const selectedIndex = todos.findIndex(todo => {
      return todo.id === clickTodo.id;
    })
    const setTodo = todos[selectedIndex]

    // 真偽値を反転
    setTodo.done = !setTodo.done;

    // doneを上書きしたsetTodoをtodosに挿入
    todos[selectedIndex] = setTodo;

    // 値を更新
    this.setState({ todos: todos })
  }


  /**
   * 削除ボタンを押すとTodoを削除するメソッド
   *
   * @param {*} clickTodo
   * @memberof App
   */
  deleteTodo(clickTodo) {
    const todos = this.state.todos.slice();
    const deletedTodos = todos.filter(todo => {
      return todo.id !== clickTodo.id
    })

    this.setState({ todos: deletedTodos })
  }

  // レンダリング
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
