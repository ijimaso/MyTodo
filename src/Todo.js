import React from "react";
import "./css/Todo.css";

//react-bootstrapからCard,Buttonコンポーネントをインポート
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

//Fuctional Component
//props(親から渡された変数)を受け取って表示
//fuctional componentはpropsを指定するとき，thisがいらない
//react-bootstrapのCardコンポーネントで装飾
const Todo = props => {
    const doneClassName = props.done ? "done" : "undone";
    const done = props.done ? "もとに戻す" : "完了";
    const buttonClassName = props.done ? "outline-danger":"danger";

    return (
        <div className={doneClassName}>
            <Card style={{ width: "250px" }}>
                <Card.Body>
                    {/* <Card.Title className={doneClassName}>{props.id}</Card.Title> */}
                    <Card.Title className={doneClassName}>{props.date}</Card.Title>
                    <Card.Title className={doneClassName}>{props.title}</Card.Title>
                    <Card.Text className={doneClassName}>{props.content}</Card.Text>
                    <Button variant={buttonClassName} onClick={(event) => {
                        event.preventDefault();
                        props.switchStatus(props);
                    }}>{done}</Button>
                    <Button variant="info" onClick={(event) => {
                        event.preventDefault();
                        props.deleteTodo(props);
                    }}>削除</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

//Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
export default Todo;