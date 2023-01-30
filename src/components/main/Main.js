import { ProductCard } from "../product/ProductCard"

export const Main = () => {
    return(
        <div className="main-container">
            <ProductCard img={'https://images.unsplash.com/photo-1481455473976-c280ae7c10f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'}/>
            <ProductCard/>
        </div>
    )
}