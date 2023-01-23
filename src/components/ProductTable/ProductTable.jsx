import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
const ProductTable=(props)=>{
   console.log(props)
    return(
        <>
        <div className="display">
            <ProductCategoryRow category={props.data[0].category} />
            <ProductRow pname={props.data[0].name} />
        </div>
        </>
    )
}
export default ProductTable;