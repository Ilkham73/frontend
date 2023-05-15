
import { Categories } from '../../components/Categories/Categories'
import { tv } from '../../orders'

export const TVPage = () => {
    return (
        <>
            
            <Categories categoryName={'Телевизоры'} ordersArray={tv} />
           
        </>
    )
}