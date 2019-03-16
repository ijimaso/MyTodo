import React, { Component } from "react";
import Todo from "./Todo";
import "./css/Todolist.css";

// Class Component
//Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
//親から渡されたデータ(配列や変数など)をpropsで受け取って使う
export default class Todolist extends Component {
    // 一行目の個数を指定して，Todoを並べるメソッド
    arrangeTodos(lineNumber) {
        // filterメソッドで3列になるようにTodosを取り出す
        const onelineTodos = this.props.todos.filter(todo => {
            return (
                todo.id >= 3 * lineNumber - 2 && todo.id <= lineNumber * 3
            );
        });

        //取り出したTodos(配列)を使って，それぞれのTodoに対して，Todoコンポーネントを呼び出す
        //{...eactTodo}で下の階層にプロパティをまとめて渡せる
        const eachTodos = onelineTodos.map(onelineTodo => {
            return <Todo key={onelineTodo.id} {...onelineTodo} />;
        });

        //作り出されたTodoコンポーネントを戻り値として返す
        return eachTodos;
    }

    //renderメソッド→表示する
    //arrangeTodosメソッドを呼び出し
    render() {
        return (
            <div className="Todolist">
                <ul>{this.arrangeTodos(1)}</ul>
                <ul>{this.arrangeTodos(2)}</ul>
                <ul>{this.arrangeTodos(3)}</ul>
                <ul>{this.arrangeTodos(4)}</ul>
                <ul>{this.arrangeTodos(5)}</ul>
                <ul>{this.arrangeTodos(6)}</ul>
            </div>
        );
    }
}
