import React, { Component } from "react";
import Todo from "./Todo";
import "./css/Todolist.css";

/**
 * Todolistコンポーネント
 *
 * @export
 * @class Todolist
 * @extends {Component}
 */
export default class Todolist extends Component {
  /**
   * 一行に3個のTodoを並べるメソッド
   *
   * @param {*} lineNumber 行数
   * @returns {list}
   * @memberof Todolist
   */
  arrangeTodos(lineNumber) {
    // filterメソッドで3列になるようにTodosを取り出す
    const onelineTodos = this.props.todos.filter(todo => {
      return todo.id >= 3 * lineNumber - 2 && todo.id <= lineNumber * 3;
    });

    //取り出したTodos(配列)を使って，それぞれのTodoに対して，Todoコンポーネントを呼び出す
    //{...eactTodo}で下の階層にプロパティをまとめて渡す
    const eachTodos = onelineTodos.map(onelineTodo => {
      return (
          <Todo
          key={onelineTodo.id}
          {...onelineTodo}
          switchStatus={this.props.switchStatus}
          deleteTodo={this.props.deleteTodo}
        />
      );
    });

    return eachTodos;
  }

  render() {
    const todolists = [];
    const lines = 100;
    for (let i = 1; i <= lines; i++) {
      todolists.push(<li key={i}>{this.arrangeTodos(i)}</li>);
    }

    return (
      <div className="Todolist">
        <ul>{todolists}</ul>
      </div>
    );
  }
}
