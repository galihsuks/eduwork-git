const filterTodo = (filter, dataAll) => {
    if (filter == "Completed") {
        return dataAll.filter((todo) => {
            if (todo.selesai) return true;
            else return false;
        });
    }
    if (filter == "Incomplete") {
        return dataAll.filter((todo) => {
            if (!todo.selesai) return true;
            else return false;
        });
    }
    return [...dataAll];
};

export const reducerTodo = (state, action) => {
    const todosLocalStorage = window.localStorage.getItem("todos");
    const todoLocalStorageArr = todosLocalStorage
        ? JSON.parse(todosLocalStorage)
        : [];
    let todoDummy = [];
    switch (action.type) {
        case "ADD_TODO":
            const lastId =
                todoLocalStorageArr.length > 0
                    ? todoLocalStorageArr[todoLocalStorageArr.length - 1].id
                    : 0;
            todoDummy = [
                ...todoLocalStorageArr,
                {
                    id: lastId + 1,
                    tugas: action.payload.tugas,
                    selesai: false,
                },
            ];
            break;
        case "TOGGLE_TODO":
            todoDummy = todoLocalStorageArr.map((todo) => {
                if (todo.id == action.payload.id)
                    return { ...todo, selesai: !todo.selesai };
                else return todo;
            });
            break;
        case "DELETE_TODO":
            todoDummy = todoLocalStorageArr.filter((todo) => {
                if (todo.id == action.payload.id) return false;
                else return true;
            });
            break;
        case "SET_FILTER":
            todoDummy = filterTodo(action.payload, todoLocalStorageArr);
            break;
        case "LOAD_TODOS":
            todoDummy = [...todoLocalStorageArr];
        default:
            todoDummy = [...todoLocalStorageArr];
            break;
    }
    if (action.type != "SET_FILTER" && action.type != "LOAD_TODOS") {
        window.localStorage.setItem("todos", JSON.stringify(todoDummy));
        return filterTodo(action.payload.filter, todoDummy);
    }
    return todoDummy;
};
