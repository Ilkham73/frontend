import Carousel from 'react-bootstrap/Carousel';


export const HomePage = () => {
    return (
        <> 
        <Carousel>
            <Carousel.Item>
        <img className="d-block w-100"
          src="https://static.onlinetrade.ru/img/banners/18_1682689321.jpg"
          alt="Description" width="100" height="800"  />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/banners/18_1683030277.jpg"
          alt="Description" width="100" height="800"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/banners/18_1682501124.jpg"
          alt="Description" width="100" height="800" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/banners/18_1682608597.jpg"
          alt="Description" width="10000" height="800"
        />

        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </> )
}