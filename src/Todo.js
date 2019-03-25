import React from "react";
import "./css/Todo.css";

//react-bootstrapからCard,Buttonコンポーネントをインポート
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';


/**
 * Todoコンポーネント
 * Fuctional Component
 * props(親から渡された変数)を受け取って表示
 * fuctional componentはpropsを指定するとき，thisがいらない
 * react-bootstrapのCardコンポーネントで装飾
 *
 * @param {*} props
 * @returns
 */
const Todo = props => {
    const doneClassName = props.done ? "done" : "undone";
    const done = props.done ? "Undone" : "Done";
    const buttonClassName = props.done ? "warning" : "info";

    return (
        <div className={doneClassName}>
            <Card style={{ width: "250px" }}>
                <Card.Body>
                    <Card.Title className={doneClassName}>{props.title}</Card.Title>
                    <Card.Text className={doneClassName}>{props.content}</Card.Text>
                    <Button variant={buttonClassName} onClick={(event) => {
                        event.preventDefault();
                        props.switchStatus(props);
                    }} id="doneButton">{done}</Button>
                    <Button variant="danger" onClick={(event) => {
                        event.preventDefault();
                        props.deleteTodo(props);
                    }}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

//Todoコンポーネントをデフォルトのコンポーネントとして，エクスポート
export default Todo;