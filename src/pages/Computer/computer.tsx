import { Categories } from '../../components/Categories/Categories'
import { computer } from '../../orders'

export const ComputerPage = () => {
    return (
        <>
            
            <Categories categoryName={'Ноутбуки'} ordersArray={computer} />
           
        </>
    )
}