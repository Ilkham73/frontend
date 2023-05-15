import Carousel from 'react-bootstrap/Carousel';

export const DiscountPage = () => {
    return (
        <> 
        <Carousel>
            <Carousel.Item>
        <img className="d-block w-100"
          src="https://static.onlinetrade.ru/img/actions/tefal_i_moulinex_promokod_na_mayskie__1682605376.jpg"
          alt="Description" width="100" height="600"  />
        <Carousel.Caption>
        <h3>Tefal и Moulinex: промокод на майские!</h3>
        <p>Cкидка 15% по промокоду May15 на технику для кухни Tefal и Moulinex в интернет-магазине QHome</p>
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/actions/fubag_darit_svarochnuyu_masku_1683721156.jpg"
          alt="Description" width="100" height="600"
        />

        <Carousel.Caption>
          <h3>FUBAG дарит сварочную маску</h3>
          <p>Получите в подарок сварочную маску при покупке сварочного аппарата FUBAG в интернет-магазине QHome</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/actions/nadoba_skidka_20_po_promokodu_1683707638.jpg"
          alt="Description" width="100" height="600" />
        <Carousel.Caption>
          <h3>NADOBA: скидка 20% по промокоду</h3>
          <p>
          Скидка 20% по промокоду NADOBA на посуду NADOBA в интернет-магазине  QHome
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.onlinetrade.ru/img/actions/goryachie_skidki_na_chay_hillway_1683319448.jpg"
          alt="Description" width="100" height="600"
        />

        <Carousel.Caption>
          <h3>Горячие скидки на чай Hillway</h3>
          <p>Скидки до 17% на чай Hillway в интернет-магазине QHome</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </>
    )
}
export default DiscountPage; 