function IngredientsComponent({ingredients}) {

    return(
        <ul className="container list" >
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ul>    
    )
}

export default IngredientsComponent;