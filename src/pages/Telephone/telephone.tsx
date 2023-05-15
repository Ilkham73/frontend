
import { Categories } from '../../components/Categories/Categories'
import { telephone } from '../../orders'

export const TelephonePage = () => {
    return (
        <>
            
            <Categories categoryName={'Телефоны'} ordersArray={telephone} />
           
        </>
    )
}