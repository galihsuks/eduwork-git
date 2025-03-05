import { useEffect, useReducer, useState } from "react";
import { reducerTodo } from "../reducers/todo.reducer";
import TodoItem from "../components/TodoItem";
import TodoForm from "./TodoForm";
import FilterButton from "../components/FilterButton";

export default function TodoList() {
    const initialTodo = JSON.parse(localStorage.getItem("todos")) || [];
    const [todo, dispatchTodo] = useReducer(reducerTodo, initialTodo);
    const [waktu, setWaktu] = useState({
        tanggal: 0,
        bulan: "",
        tahun: 0,
        hari: "",
    });
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const newDate = new Date();
        const bulan = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MEI",
            "JUN",
            "JUL",
            "AGS",
            "SEP",
            "OKT",
            "NOV",
            "DES",
        ];
        const hari = [
            "MINGGU",
            "SENIN",
            "SELASA",
            "RABU",
            "KAMIS",
            "JUMAT",
            "SABTU",
        ];
        setWaktu({
            tanggal: newDate.getDate(),
            bulan: bulan[newDate.getMonth()],
            tahun: newDate.getFullYear(),
            hari: hari[newDate.getDay()],
        });

        dispatchTodo({ type: "LOAD_TODOS" });
    }, []);

    useEffect(() => {
        console.log("Todo :");
        console.log(todo);
        console.log("localstorage:");
        console.log(JSON.parse(window.localStorage.getItem("todos")));
    }, [todo]);

    const addData = (tugas) => {
        setModal(false);
        dispatchTodo({ type: "ADD_TODO", payload: { tugas, filter } });
    };
    const handleChange = (id) => {
        // setActionType("TOGGLE_TODO");
        dispatchTodo({ type: "TOGGLE_TODO", payload: { id, filter } });
    };
    const handleDelete = (id) => {
        // setActionType("DELETE_TODO");
        dispatchTodo({ type: "DELETE_TODO", payload: { id, filter } });
    };
    const handleFilter = (e) => {
        // setActionType("SET_FILTER");
        setFilter(e.target.value);
        console.log({ type: "SET_FILTER", payload: e.target.value });
        dispatchTodo({ type: "SET_FILTER", payload: e.target.value });
    };

    return (
        <>
            {modal && (
                <TodoForm
                    handleSubmit={addData}
                    autofocus={modal}
                    setModal={setModal}
                />
            )}
            <div style={{ padding: "1em 2em" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                    className="text-abu1"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1em",
                        }}
                    >
                        <h1 style={{ margin: "0", fontSize: "50px" }}>
                            {waktu.tanggal}
                        </h1>
                        <div>
                            <p style={{ margin: "0", marginBottom: "-5px" }}>
                                <b>{waktu.bulan}</b>
                            </p>
                            <p style={{ margin: "0" }}>{waktu.tahun}</p>
                        </div>
                    </div>
                    <p style={{ margin: "0" }}>
                        <b>{waktu.hari}</b>
                    </p>
                </div>
                <hr style={{ marginBottom: "1em" }} />
                <div
                    style={{
                        display: "flex",
                        gap: "1em",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p>Filter</p>
                    <FilterButton
                        handleFilter={handleFilter}
                        defaultValue={filter}
                    />
                </div>
                <hr style={{ marginBlock: "1em" }} />
                <div className="container-item-todo">
                    {todo.length > 0 ? (
                        <>
                            {todo.map((t) => (
                                <TodoItem
                                    key={t.id}
                                    teks={t.tugas}
                                    selesai={t.selesai}
                                    handleChange={() => {
                                        handleChange(t.id);
                                    }}
                                    handleDelete={() => {
                                        handleDelete(t.id);
                                    }}
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <p
                                className="text-abu2"
                                style={{ marginBlock: "7px" }}
                            >
                                <i>Belum ada data</i>
                            </p>
                        </>
                    )}
                    <button
                        style={{ marginTop: "1em" }}
                        onClick={() => {
                            setModal(true);
                        }}
                    >
                        Tambah data
                    </button>
                </div>
            </div>
        </>
    );
}
