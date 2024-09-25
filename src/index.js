class todo_item{
    constructor(title,description,dueDate,priority,id,completed){
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this.id = id
        this._completed = completed;
    }

    set priority(newPriority){
        this._priority = newPriority;
    }

    set title(newTitle){
        this._title = newTitle;
    }

    set completed(newStatus){
        this._completed = newStatus;
    }
}

class projects{
    constructor(title){
        this.title = title;

    }
    todos = []
    createTodo = (title,description,dueDate,priority) => {
        id = todos.length
        completed = false;
        item = new todo_item(title,description,dueDate,priority,id,completed);
        this.todos.append(item);
    }
    DeleteTodo = (id) => {
        index = this.todos.indexOf(id);
        if(index > -1){
            this.todos.splice(index,1)
        }
    }
}
