export default function TodoItem({
    teks,
    selesai,
    handleChange,
    handleDelete,
}) {
    return (
        <label className="item-todo">
            <input type="checkbox" checked={selesai} onChange={handleChange} />
            <p>{teks}</p>
            <div
                style={{ display: "flex", alignItems: "center", gap: "0.7em" }}
            >
                <span className="checkbox"></span>
                <span className="close" onClick={handleDelete}>
                    ✖
                </span>
            </div>
        </label>
    );
}
