import React from "react";
import { Button, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const todoStyles = makeStyles({
    list: {
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid light-gray",
    },
    text: {
        width: "70%",
    },
    listButtons: {
        marginLeft: 10,
    },
});

export interface Todo {
    id: number
    val: string
    isDone: boolean
}

const TodoList: React.FunctionComponent<{
    todos: Todo[];
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}> = ({ todos, onDelete, onEdit }) => {
    const classes = todoStyles();

    return (
        <List>
            {todos.map((todo: Todo) => {
                return (
                    <React.Fragment key={todo.id}>
                        <ListItem divider={true} className={classes.list}>
                            <Typography
                                className={classes.text}
                                style={{ color: todo.isDone ? "green" : "" }}
                            >
                                {todo.val}
                            </Typography>
                            <Button
                                onClick={() => onEdit(todo.id)}
                                variant="contained"
                                className={classes.listButtons}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => onDelete(todo.id)}
                                color="secondary"
                                variant="contained"
                                className={classes.listButtons}
                            >
                                Delete
                            </Button>
                        </ListItem>
                    </React.Fragment>
                );
            })}
        </List>
    );
};

export default TodoList;
