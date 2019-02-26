import React from "react";
import "./css/Todo.css";

//react-bootstrapからCardコンポーネントをインポート
import Card from "react-bootstrap/Card";

//Fuctional Component
//props(親から渡された変数)を受け取って表示
//fuctional componentはpropsを指定するとき，thisがいらない
//react-bootstrapのCardコンポーネントで装飾
const Todo = props => {
    return (
        <div className="Todo">
            <Card style={{ width: "250px" }}>
                <Card.Body>
                    <Card.Title>{props.date}</Card.Title>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.content}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

//Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
export default Todo;