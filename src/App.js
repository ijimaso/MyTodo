import React, { Component } from "react";
import Count from "./Count";
import InputForm from "./InputForm";
import Todolist from "./Todolist";
import ErrorModal from "./ErrorModal";
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
    const todos = [];
    const todosLength = todos.length;
    const modalMessage = "";

    //状態(state)を保存
    this.state = {
      todos: todos,
      doneTodo: todosLength,
      undoneTodo: todosLength,
      modalMessage: modalMessage,
      show: false,
      countTodo: todosLength
    };
  }

  //modalを表示/非表示するメソッド
  modalShow() {
    this.setState({ show: true });
  }

  modalClose() {
    this.setState({ show: false });
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
    const todos = this.state.todos.slice(); //全部の要素を新しい配列としてコピー
    let undoneTodo = this.state.undoneTodo;
    let modalMessage = this.state.modalMessage;
    let countTodo = this.state.countTodo;

    // titleとcontentの両方の記入が必要
    if (title !== "" && content !== "") {
      countTodo += 1;
      undoneTodo += 1;

      // 作成したTodoを配列todosに追加
      todos.push({
        id: countTodo,
        title: title,
        content: content,
        done: false
      });

      //値を更新
      this.setState({ todos: todos });
      this.setState({ countTodo: countTodo });
      this.setState({ undoneTodo: undoneTodo });

      // フォームの中身を空に再設定
      event.target.title.value = "";
      event.target.content.value = "";
    } else if (title === "" && content !== "") {
      modalMessage = "title";
      this.modalShow();
    } else if (title !== "" && content === "") {
      modalMessage = "content";
      this.modalShow();
    } else {
      modalMessage = "both of title and content";
      this.modalShow();
    }

    this.setState({ modalMessage: modalMessage });

  }

  /**
   * 完了/未完了ボタンを押すと切り替わるメソッド
   *
   * @param {*} clickTodo
   * @memberof App
   */
  switchStatus(clickTodo) {
    const todos = this.state.todos.slice();
    let doneTodo = this.state.doneTodo;
    let undoneTodo = this.state.undoneTodo;

    // クリックしたTodoのインデックスを取得
    const selectedIndex = todos.findIndex(todo => {
      return todo.id === clickTodo.id;
    })

    const setTodo = todos[selectedIndex];

    // 真偽値を反転
    setTodo.done = !setTodo.done;

    // 完了/未完了によって，個数をカウント
    if (setTodo.done === true) {
      doneTodo += 1;
      undoneTodo -= 1;
    }

    if (setTodo.done === false) {
      undoneTodo += 1;
      doneTodo -= 1;
    }

    this.setState({ todos: todos });
    this.setState({ doneTodo: doneTodo });
    this.setState({ undoneTodo: undoneTodo });
  }


  /**
   * 削除ボタンを押すとTodoを削除するメソッド
   *
   * @param {*} clickTodo
   * @memberof App
   */
  deleteTodo(clickTodo) {
    const todos = this.state.todos.slice();
    let doneTodo = this.state.doneTodo;
    let undoneTodo = this.state.undoneTodo;

    const leftTodos = todos.filter(todo => {
      return todo.id !== clickTodo.id;
    });

    const deletedTodo = todos.filter(todo => {
      return todo.id === clickTodo.id;
    })

    if (deletedTodo[0].done === true) {
      doneTodo -= 1;
    }

    if (deletedTodo[0].done === false) {
      undoneTodo -= 1;
    }

    this.setState({ todos: leftTodos });
    this.setState({ doneTodo: doneTodo });
    this.setState({ undoneTodo: undoneTodo });
  }

  // レンダリング
  render() {
    return (
        <div className="App">
          <h1 id="title">MyTodo</h1>
          <Count doneTodo={this.state.doneTodo} undoneTodo={this.state.undoneTodo} />
          <InputForm makeTodo={this.makeTodo.bind(this)} />
          <ErrorModal show={this.state.show} modalMessage={this.state.modalMessage} modalShow={this.modalShow.bind(this)} modalClose={this.modalClose.bind(this)} />
          <Todolist todos={this.state.todos} switchStatus={this.switchStatus.bind(this)} deleteTodo={this.deleteTodo.bind(this)} />
        </div>
    );
  }
}
