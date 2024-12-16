import { useState } from "react";
import InputField from "./components/InputField";
import TodoList, { Todo } from "./components/TodoList";
import { Button, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const appStyles = makeStyles({
    addButton: {
        height: 55,
        marginBottom: 30,
    },
    container: {
        textAlign: "center",
        marginTop: 100,
    },
});

function App() {
    const [inputValue, setInputValue] = useState<string>("");
    const [isEdited, setIsEdited] = useState<boolean>(false)    
    const [todos, setTodos] = useState<Todo[]>([]);
    const classes = appStyles();

    const onChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleClick = () => {
        setTodos([
            ...todos,
            { val: inputValue, isDone: false, id: new Date().getTime() },
        ]);
        setInputValue("");
        setIsEdited(false);
    };

    const onDelete = (id: number) => {
      const newTodos = todos.filter((item: Todo) => item.id !== id)

      setTodos(newTodos)
    }

    const onEdit = (id: number) => {
      const text = todos.find((todo: Todo) => todo.id === id)?.val ?? ''
      const newTodos = todos.filter((todo: Todo) => todo.id !== id)

      setIsEdited(true)
      setInputValue(text)
      setTodos(newTodos)
    }

    return (
        <Container component="main" className={classes.container}>
            <InputField inputValue={inputValue} onChange={onChange} />
            <Button
                size="large"
                variant={isEdited ? "outlined" : "contained"}
                color="primary"
                onClick={handleClick}
                className={classes.addButton}
                disabled={inputValue ? false : true}
            >
                {isEdited ? 'Edit' : 'Add'}
            </Button>
            <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit}/>
        </Container>
    );
}

export default App;
