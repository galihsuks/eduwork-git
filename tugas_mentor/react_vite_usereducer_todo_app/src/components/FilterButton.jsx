export default function FilterButton({ handleFilter, defaultValue }) {
    return (
        <select onChange={handleFilter} defaultValue={defaultValue}>
            <option value="All">Semua</option>
            <option value="Completed">Sudah dikerjakan</option>
            <option value="Incomplete">Belum dikerjakan</option>
        </select>
    );
}
