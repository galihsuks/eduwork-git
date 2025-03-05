import { useState } from "react";

export default function TodoForm({ handleSubmit, autofocus, setModal }) {
    const [tugas, setTugas] = useState("");

    const handleSubmitLocal = (e) => {
        e.preventDefault();
        handleSubmit(tugas);
        setTugas("");
    };

    return (
        <div
            style={{
                position: "fixed",
                width: "100%",
                height: "100svh",
                top: 0,
                left: 0,
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "1em",
                    padding: "1.3em 1.5em",
                    width: "70%",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5em",
                    }}
                >
                    <h5>Mau ngapain hari ini?</h5>
                    <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setModal(false);
                        }}
                    >
                        x
                    </div>
                </div>
                <form onSubmit={handleSubmitLocal}>
                    <input
                        type="text"
                        placeholder="Kegiatanmu ..."
                        style={{ marginBottom: "1em" }}
                        value={tugas}
                        onChange={(e) => {
                            setTugas(e.target.value);
                        }}
                        required
                        autoFocus={autofocus}
                    />
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <button type="submit">Tambahkan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
