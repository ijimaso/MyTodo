import React, { Component } from "react";
import Todo from "./Todo";
import "./css/Todolist.css";

// Class Component
//Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
//親から渡されたデータ(配列や変数など)をpropsで受け取って使う
export default class Todolist extends Component {
    // 一行目の個数を指定して，Todoを取り出すメソッド
    makeLine(lineNumber) {
        // filterメソッドで条件を満たすTodosを取り出す
        const onelineTodos = this.props.todos.filter(onelineTodo => {
            return (
                onelineTodo.id >= 3 * lineNumber - 2 && onelineTodo.id <= lineNumber * 3
            );
        });

        //取り出したTodos(配列)を使って，それぞれのTodoに対して，Todoコンポーネントを呼び出す
        //{...eactTodo}で下の階層にプロパティをまとめて渡せる
        const eachTodos = onelineTodos.map(eachTodo => {
            return <Todo key={eachTodo.id} {...eachTodo} />;
        });

        //作り出されたTodoコンポーネントを戻り値として返す
        return eachTodos;
    }

    //renderメソッド→表示する
    render() {
        return (
            <div className="Todolist">
                <ul>{this.makeLine(1)}</ul>
                <ul>{this.makeLine(2)}</ul>
                <ul>{this.makeLine(3)}</ul>
            </div>
        );
    }
}
