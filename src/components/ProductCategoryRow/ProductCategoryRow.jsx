const ProductCategoryRow=(props)=>{
    console.log(props)
    return(
        <>
        <div className="display">
            {props.category}
        </div>
        </>
    )
}
export default ProductCategoryRow;