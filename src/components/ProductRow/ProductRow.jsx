const ProductRow=(props)=>{
    console.log(props)
    return(
        <>
        <div className="display">
            {props.pname}
        </div>
        </>
    )
}
export default ProductRow;