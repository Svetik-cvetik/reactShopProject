import { products } from '../assets/constants/ProductData'
import { TattooComponent } from './TattooComponent'

export const Main = () => {
    return (
    <main>
       <div className='tattoo-list'>
        {
        products.map(goods => {
            return (<TattooComponent key={goods.name} tattoo={goods}/>)
        })
        }   
        </div> 
    </main>
    )
    
}