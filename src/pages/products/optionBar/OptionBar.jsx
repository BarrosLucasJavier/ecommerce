import useProducts from "../../../hooks/useProducts"


export const OptionBar = () => {
    const { categories, setCategory } = useProducts();
    const handleClick = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value)
    }

    return (
        <div>
            <select onChange={handleClick}>
                <option value=''>All</option>
                {categories.data && categories.data.map((category, index) =>(
                    <option key={index}
                    value={category}
                    >
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}
