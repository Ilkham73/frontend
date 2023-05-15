
import { App } from '../App';
import { createBrowserRouter } from 'react-router-dom';
import { DiscountPage } from '../pages/discount/discount';
import { HomePage } from '../pages/HomePage';
import {BuyPage} from '../pages/buy/buy';
import {WarrantyPage} from '../pages/warranty/warranty';
import { TelephonePage } from '../pages/Telephone/telephone';
import { TVPage } from '../pages/TV/tv';
import { ComputerPage } from '../pages/Computer/computer';
import { NotFoundPage } from '../pages/Error/NotFounPage';

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [ 
        {     
            index: true,
           element: <HomePage /> 
         },

        {     
            path: 'discount',
           element: <DiscountPage /> 
         },
         {     
            path: 'buy',
           element: <BuyPage /> 
         },
         {     
            path: 'warranty',
           element: <WarrantyPage /> 
         },

         {     
          path: 'telephone',
         element: <TelephonePage /> 
       },
       {     
        path: 'tv',
       element: <TVPage /> 
     },
     {     
      path: 'computer',
     element: <ComputerPage /> 
   },
      ]
    },
   
])