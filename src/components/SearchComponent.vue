<template>
  <div class="search-with-buttons">
    <input type="text" v-model="searchQuery" @keyup.enter="performSearch" placeholder="자동차 검색 기능 입니다.">
  </div>
</template>

<script>
import CargoTruck1 from '@/assets/CargoTruck1.png';
import CargoTruck2 from '@/assets/CargoTruck2.png';
import CargoTruck3 from '@/assets/CargoTruck3.png';
import CargoTruck4 from '@/assets/CargoTruck4.png';
import CargoTruck5 from '@/assets/CargoTruck5.png';
import CargoTruck6 from '@/assets/CargoTruck6.png';
import CargoTruck7 from '@/assets/CargoTruck7.png';
import CargoTruck8 from '@/assets/CargoTruck8.png';
import CargoTruck9 from '@/assets/CargoTruck9.png';

import CargoTruck10 from '@/assets/CargoTruck10.png';
import CargoTruck11 from '@/assets/CargoTruck11.png';
import CargoTruck12 from '@/assets/CargoTruck12.png';
import CargoTruck13 from '@/assets/CargoTruck13.png';
import CargoTruck14 from '@/assets/CargoTruck14.png';
import CargoTruck15 from '@/assets/CargoTruck15.png';
import CargoTruck16 from '@/assets/CargoTruck16.png';
import CargoTruck17 from '@/assets/CargoTruck17.png';
import CargoTruck18 from '@/assets/CargoTruck18.png';
import CargoTruck19 from '@/assets/CargoTruck19.png';
import CargoTruck20 from '@/assets/CargoTruck20.png';
import CargoTruck21 from '@/assets/CargoTruck21.png';
import CargoTruck22 from '@/assets/CargoTruck22.png';
import CargoTruck23 from '@/assets/CargoTruck23.png';
import CargoTruck24 from '@/assets/CargoTruck24.png';
import CargoTruck25 from '@/assets/CargoTruck25.png';
import CargoTruck26 from '@/assets/CargoTruck26.png';
import CargoTruck27 from '@/assets/CargoTruck27.png';
import CargoTruck28 from '@/assets/CargoTruck28.png';

import SmileTruck1 from '@/assets/SmileMobile1.png';
import SmileTruck2 from '@/assets/SmileMobile2.png';
import SmileTruck3 from '@/assets/SmileMobile3.png';
import SmileTruck4 from '@/assets/SmileMobile4.png';
import SmileTruck5 from '@/assets/SmileMobile5.png';
import SmileTruck6 from '@/assets/SmileMobile6.png';
import SmileTruck7 from '@/assets/SmileMobile7.png';
import SmileTruck8 from '@/assets/SmileMobile8.png';
import SmileTruck9 from '@/assets/SmileMobile9.png';

import SmileTruck10 from '@/assets/SmileMobile10.png';
import SmileTruck11 from '@/assets/SmileMobile11.png';
import SmileTruck12 from '@/assets/SmileMobile12.png';
import SmileTruck13 from '@/assets/SmileMobile13.png';
import SmileTruck14 from '@/assets/SmileMobile14.png';
import SmileTruck15 from '@/assets/SmileMobile15.png';
import SmileTruck16 from '@/assets/SmileMobile16.png';
import SmileTruck17 from '@/assets/SmileMobile17.png';
import SmileTruck18 from '@/assets/SmileMobile18.png';
import SmileTruck19 from '@/assets/SmileMobile19.png';
import SmileTruck20 from '@/assets/SmileMobile20.png';
import SmileTruck21 from '@/assets/SmileMobile21.png';

import HyundaiCar1 from '@/assets/HyundaiCar1.png';
import HyundaiCar2 from '@/assets/HyundaiCar2.png';
import HyundaiCar3 from '@/assets/HyundaiCar3.png';
import HyundaiCar4 from '@/assets/HyundaiCar4.png';
import HyundaiCar5 from '@/assets/HyundaiCar5.png';
import HyundaiCar6 from '@/assets/HyundaiCar6.png';
import HyundaiCar7 from '@/assets/HyundaiCar7.png';
import HyundaiCar8 from '@/assets/HyundaiCar8.png';
import HyundaiCar9 from '@/assets/HyundaiCar9.png';
import HyundaiCar10 from '@/assets/HyundaiCar10.png';
import HyundaiCar11 from '@/assets/HyundaiCar11.png';
import HyundaiCar12 from '@/assets/HyundaiCar12.png';
import HyundaiCar13 from '@/assets/HyundaiCar13.png';
import HyundaiCar14 from '@/assets/HyundaiCar14.png';
import HyundaiCar15 from '@/assets/HyundaiCar15.png';
import HyundaiCar16 from '@/assets/HyundaiCar16.png';
import HyundaiCar17 from '@/assets/HyundaiCar17.png';
import HyundaiCar18 from '@/assets/HyundaiCar18.png';
import HyundaiCar19 from '@/assets/HyundaiCar19.png';
import HyundaiCar20 from '@/assets/HyundaiCar20.png';
import HyundaiCar21 from '@/assets/HyundaiCar21.png';

import JoyCar1 from '@/assets/JoyCar1.png';
import JoyCar2 from '@/assets/JoyCar2.png';
import JoyCar3 from '@/assets/JoyCar3.png';
import JoyCar4 from '@/assets/JoyCar4.png';
import JoyCar5 from '@/assets/JoyCar5.png';
import JoyCar6 from '@/assets/JoyCar6.png';
import JoyCar7 from '@/assets/JoyCar7.png';
import JoyCar8 from '@/assets/JoyCar8.png';
import JoyCar9 from '@/assets/JoyCar9.png';
import JoyCar10 from '@/assets/JoyCar10.png';
import JoyCar11 from '@/assets/JoyCar11.png';
import JoyCar12 from '@/assets/JoyCar12.png';
import JoyCar13 from '@/assets/JoyCar13.png';
import JoyCar14 from '@/assets/JoyCar14.png';
import JoyCar15 from '@/assets/JoyCar15.png';
import JoyCar16 from '@/assets/JoyCar16.png';
import JoyCar17 from '@/assets/JoyCar17.png';
import JoyCar18 from '@/assets/JoyCar18.png';
import JoyCar19 from '@/assets/JoyCar19.png';
import JoyCar20 from '@/assets/JoyCar20.png';
import JoyCar21 from '@/assets/JoyCar21.png';

import SamsungCar1 from '@/assets/SamsungCar1.png';
import SamsungCar2 from '@/assets/SamsungCar2.png';
import SamsungCar3 from '@/assets/SamsungCar3.png';
import SamsungCar4 from '@/assets/SamsungCar4.png';
import SamsungCar5 from '@/assets/SamsungCar5.png';
import SamsungCar6 from '@/assets/SamsungCar6.png';
import SamsungCar7 from '@/assets/SamsungCar7.png';

import SamsungCar8 from '@/assets/SamsungCar8.png';
import SamsungCar9 from '@/assets/SamsungCar9.png';
import SamsungCar10 from '@/assets/SamsungCar10.png';
import SamsungCar11 from '@/assets/SamsungCar11.png';
import SamsungCar12 from '@/assets/SamsungCar12.png';
import SamsungCar13 from '@/assets/SamsungCar13.png';
import SamsungCar14 from '@/assets/SamsungCar14.png';

import SsangyongCar1 from '@/assets/SsangyongCar1.png';
import SsangyongCar2 from '@/assets/SsangyongCar2.png';
import SsangyongCar3 from '@/assets/SsangyongCar3.png';
import SsangyongCar4 from '@/assets/SsangyongCar4.png';
import SsangyongCar5 from '@/assets/SsangyongCar5.png';
import SsangyongCar6 from '@/assets/SsangyongCar6.png';
import SsangyongCar7 from '@/assets/SsangyongCar7.png';

import ChevroletCar1 from '@/assets/ChevroletCar1.png';
import ChevroletCar2 from '@/assets/ChevroletCar2.png';
import ChevroletCar3 from '@/assets/ChevroletCar3.png';
import ChevroletCar4 from '@/assets/ChevroletCar4.png';
import ChevroletCar5 from '@/assets/ChevroletCar5.png';
import ChevroletCar6 from '@/assets/ChevroletCar6.png';
import ChevroletCar7 from '@/assets/ChevroletCar7.png';

import ChevroletCar8 from '@/assets/ChevroletCar8.png';
import ChevroletCar9 from '@/assets/ChevroletCar9.png';

import ChevroletCar10 from '@/assets/ChevroletCar10.png';
import ChevroletCar11 from '@/assets/ChevroletCar11.png';
import ChevroletCar12 from '@/assets/ChevroletCar12.png';
import ChevroletCar13 from '@/assets/ChevroletCar13.png';
import ChevroletCar14 from '@/assets/ChevroletCar14.png';

import KiaCar1 from '@/assets/KiaCar1.png';
import KiaCar2 from '@/assets/KiaCar2.png';
import KiaCar3 from '@/assets/KiaCar3.png';
import KiaCar4 from '@/assets/KiaCar4.png';
import KiaCar5 from '@/assets/KiaCar5.png';
import KiaCar6 from '@/assets/KiaCar6.png';
import KiaCar7 from '@/assets/KiaCar7.png';
import KiaCar8 from '@/assets/KiaCar8.png';
import KiaCar9 from '@/assets/KiaCar9.png';
import KiaCar10 from '@/assets/KiaCar10.png';
import KiaCar11 from '@/assets/KiaCar11.png';

import KiaCar12 from '@/assets/KiaCar12.png';
import KiaCar13 from '@/assets/KiaCar13.png';
import KiaCar14 from '@/assets/KiaCar14.png';
import KiaCar15 from '@/assets/KiaCar15.png';
import KiaCar16 from '@/assets/KiaCar16.png';

import KiaCar17 from '@/assets/KiaCar17.png';
import KiaCar18 from '@/assets/KiaCar18.png';
import KiaCar19 from '@/assets/KiaCar19.png';
import KiaCar20 from '@/assets/KiaCar20.png';
import KiaCar21 from '@/assets/KiaCar21.png';
import KiaCar22 from '@/assets/KiaCar22.png';
import KiaCar23 from '@/assets/KiaCar23.png';
import KiaCar24 from '@/assets/KiaCar24.png';
import KiaCar25 from '@/assets/KiaCar25.png';
import KiaCar26 from '@/assets/KiaCar26.png';
import KiaCar27 from '@/assets/KiaCar27.png';
import KiaCar28 from '@/assets/KiaCar28.png';

import CarSpace1 from '@/assets/CarSpace1.png';
import CarSpace2 from '@/assets/CarSpace2.png';
import CarSpace3 from '@/assets/CarSpace3.png';
import CarSpace4 from '@/assets/CarSpace4.png';
import CarSpace5 from '@/assets/CarSpace5.png';
import CarSpace6 from '@/assets/CarSpace6.png';
import CarSpace7 from '@/assets/CarSpace7.png';
import CarSpace8 from '@/assets/CarSpace8.png';
import CarSpace9 from '@/assets/CarSpace9.png';
import CarSpace10 from '@/assets/CarSpace10.png';
import CarSpace11 from '@/assets/CarSpace11.png';
import CarSpace12 from '@/assets/CarSpace12.png';
import CarSpace13 from '@/assets/CarSpace13.png';
import CarSpace14 from '@/assets/CarSpace14.png';
import CarSpace15 from '@/assets/CarSpace15.png';
import CarSpace16 from '@/assets/CarSpace16.png';
import CarSpace17 from '@/assets/CarSpace17.png';
import CarSpace18 from '@/assets/CarSpace18.png';
import CarSpace19 from '@/assets/CarSpace19.png';
import CarSpace20 from '@/assets/CarSpace20.png';
import CarSpace21 from '@/assets/CarSpace21.png';
import CarSpace22 from '@/assets/CarSpace22.png';
import CarSpace23 from '@/assets/CarSpace23.png';
import CarSpace24 from '@/assets/CarSpace24.png';
import CarSpace25 from '@/assets/CarSpace25.png';
import CarSpace26 from '@/assets/CarSpace26.png';
import CarSpace27 from '@/assets/CarSpace27.png';
import CarSpace28 from '@/assets/CarSpace28.png';
import CarSpace29 from '@/assets/CarSpace29.png';
import CarSpace30 from '@/assets/CarSpace30.png';
import CarSpace31 from '@/assets/CarSpace31.png';
import CarSpace32 from '@/assets/CarSpace32.png';
import CarSpace33 from '@/assets/CarSpace33.png';
import CarSpace34 from '@/assets/CarSpace34.png';
import CarSpace35 from '@/assets/CarSpace35.png';
import CarSpace36 from '@/assets/CarSpace36.png';
import CarSpace37 from '@/assets/CarSpace37.png';
import CarSpace38 from '@/assets/CarSpace38.png';
import CarSpace39 from '@/assets/CarSpace39.png';
import CarSpace40 from '@/assets/CarSpace40.png';
import CarSpace41 from '@/assets/CarSpace41.png';
import CarSpace42 from '@/assets/CarSpace42.png';
import CarSpace43 from '@/assets/CarSpace43.png';
import CarSpace44 from '@/assets/CarSpace44.png';
import CarSpace45 from '@/assets/CarSpace45.png';
import CarSpace46 from '@/assets/CarSpace46.png';
import CarSpace47 from '@/assets/CarSpace47.png';
import CarSpace48 from '@/assets/CarSpace48.png';
import CarSpace49 from '@/assets/CarSpace49.png';

import CarSpaceCar1 from '@/assets/CarSpaceCar1.png';
import CarSpaceCar2 from '@/assets/CarSpaceCar2.png';
import CarSpaceCar3 from '@/assets/CarSpaceCar3.png';
import CarSpaceCar4 from '@/assets/CarSpaceCar4.png';
import CarSpaceCar5 from '@/assets/CarSpaceCar5.png';
import CarSpaceCar6 from '@/assets/CarSpaceCar6.png';
import CarSpaceCar7 from '@/assets/CarSpaceCar7.png';
import CarSpaceCar8 from '@/assets/CarSpaceCar8.png';
import CarSpaceCar9 from '@/assets/CarSpaceCar9.png';
import CarSpaceCar10 from '@/assets/CarSpaceCar10.png';
import CarSpaceCar11 from '@/assets/CarSpaceCar11.png';
import CarSpaceCar12 from '@/assets/CarSpaceCar12.png';
import CarSpaceCar13 from '@/assets/CarSpaceCar13.png';
import CarSpaceCar14 from '@/assets/CarSpaceCar14.png';
import CarSpaceCar15 from '@/assets/CarSpaceCar15.png';
import CarSpaceCar16 from '@/assets/CarSpaceCar16.png';
import CarSpaceCar17 from '@/assets/CarSpaceCar17.png';
import CarSpaceCar18 from '@/assets/CarSpaceCar18.png';
import CarSpaceCar19 from '@/assets/CarSpaceCar19.png';
import CarSpaceCar20 from '@/assets/CarSpaceCar20.png';
import CarSpaceCar21 from '@/assets/CarSpaceCar21.png';
import CarSpaceCar22 from '@/assets/CarSpaceCar22.png';
import CarSpaceCar23 from '@/assets/CarSpaceCar23.png';
import CarSpaceCar24 from '@/assets/CarSpaceCar24.png';
import CarSpaceCar25 from '@/assets/CarSpaceCar25.png';
import CarSpaceCar26 from '@/assets/CarSpaceCar26.png';
import CarSpaceCar27 from '@/assets/CarSpaceCar27.png';
import CarSpaceCar28 from '@/assets/CarSpaceCar28.png';
import CarSpaceCar29 from '@/assets/CarSpaceCar29.png';
import CarSpaceCar30 from '@/assets/CarSpaceCar30.png';
import CarSpaceCar31 from '@/assets/CarSpaceCar31.png';
import CarSpaceCar32 from '@/assets/CarSpaceCar32.png';
import CarSpaceCar33 from '@/assets/CarSpaceCar33.png';
import CarSpaceCar34 from '@/assets/CarSpaceCar34.png';
import CarSpaceCar35 from '@/assets/CarSpaceCar35.png';
import CarSpaceCar36 from '@/assets/CarSpaceCar36.png';
import CarSpaceCar37 from '@/assets/CarSpaceCar37.png';
import CarSpaceCar38 from '@/assets/CarSpaceCar38.png';
import CarSpaceCar39 from '@/assets/CarSpaceCar39.png';
import CarSpaceCar40 from '@/assets/CarSpaceCar40.png';
import CarSpaceCar41 from '@/assets/CarSpaceCar41.png';
import CarSpaceCar42 from '@/assets/CarSpaceCar42.png';
import CarSpaceCar43 from '@/assets/CarSpaceCar43.png';
import CarSpaceCar44 from '@/assets/CarSpaceCar44.png';
import CarSpaceCar45 from '@/assets/CarSpaceCar45.png';
import CarSpaceCar46 from '@/assets/CarSpaceCar46.png';
import CarSpaceCar47 from '@/assets/CarSpaceCar47.png';
import CarSpaceCar48 from '@/assets/CarSpaceCar48.png';
import CarSpaceCar49 from '@/assets/CarSpaceCar49.png';
import CarSpaceCar50 from '@/assets/CarSpaceCar50.png';
import CarSpaceCar51 from '@/assets/CarSpaceCar51.png';
import CarSpaceCar52 from '@/assets/CarSpaceCar52.png';
import CarSpaceCar53 from '@/assets/CarSpaceCar53.png';
import CarSpaceCar54 from '@/assets/CarSpaceCar54.png';
import CarSpaceCar55 from '@/assets/CarSpaceCar55.png';
import CarSpaceCar56 from '@/assets/CarSpaceCar56.png';



export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    performSearch: function() {
      const files = [
        { imgSrc: CargoTruck1, url: '/CargoTruck1', altText: 'CargoTruck1', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck2, url: '/CargoTruck2', altText: 'CargoTruck2', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck3, url: '/CargoTruck3', altText: 'CargoTruck3', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck4, url: '/CargoTruck4', altText: 'CargoTruck4', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck5, url: '/CargoTruck5', altText: 'CargoTruck5', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck6, url: '/CargoTruck6', altText: 'CargoTruck6', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck7, url: '/CargoTruck7', altText: 'CargoTruck7', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck8, url: '/CargoTruck8', altText: 'CargoTruck8', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck9, url: '/CargoTruck9', altText: 'CargoTruck9', type: 'Diesel', sort: 'Truck' },

        { imgSrc: SmileTruck1, url: '/SmileTruck1', altText: 'SmileTruck1', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck2, url: '/SmileTruck2', altText: 'SmileTruck2', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck3, url: '/SmileTruck3', altText: 'SmileTruck3', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck4, url: '/SmileTruck4', altText: 'SmileTruck4', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck5, url: '/SmileTruck5', altText: 'SmileTruck5', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck6, url: '/SmileTruck6', altText: 'SmileTruck6', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck7, url: '/SmileTruck7', altText: 'SmileTruck7', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck8, url: '/SmileTruck8', altText: 'SmileTruck8', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck9, url: '/SmileTruck9', altText: 'SmileTruck9', type: 'Electric', sort: 'Truck' },

        { imgSrc: SmileTruck10, url: '/SmileTruck10', altText: 'SmileTruck10', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck11, url: '/SmileTruck11', altText: 'SmileTruck11', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck12, url: '/SmileTruck12', altText: 'SmileTruck12', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck13, url: '/SmileTruck13', altText: 'SmileTruck13', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck14, url: '/SmileTruck14', altText: 'SmileTruck14', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck15, url: '/SmileTruck15', altText: 'SmileTruck15', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck16, url: '/SmileTruck16', altText: 'SmileTruck16', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck17, url: '/SmileTruck17', altText: 'SmileTruck17', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck18, url: '/SmileTruck18', altText: 'SmileTruck18', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck19, url: '/SmileTruck19', altText: 'SmileTruck19', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck20, url: '/SmileTruck20', altText: 'SmileTruck20', type: 'Electric', sort: 'Truck' },
        { imgSrc: SmileTruck21, url: '/SmileTruck21', altText: 'SmileTruck21', type: 'Electric', sort: 'Truck' },


        { imgSrc: KiaCar1, url: '/KiaCar1', altText: 'KiaCar1', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar2, url: '/KiaCar2', altText: 'KiaCar2', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar3, url: '/KiaCar3', altText: 'KiaCar3', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar4, url: '/KiaCar4', altText: 'KiaCar4', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar5, url: '/KiaCar5', altText: 'KiaCar5', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar6, url: '/KiaCar6', altText: 'KiaCar6', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar7, url: '/KiaCar7', altText: 'KiaCar7', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar8, url: '/KiaCar8', altText: 'KiaCar8', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar9, url: '/KiaCar9', altText: 'KiaCar9', type: 'Gasoline', sort: 'Sedan' },
        
        { imgSrc: KiaCar10, url: '/KiaCar10', altText: 'KiaCar10', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar11, url: '/KiaCar11', altText: 'KiaCar11', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar12, url: '/KiaCar12', altText: 'KiaCar12', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar13, url: '/KiaCar13', altText: 'KiaCar13', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar14, url: '/KiaCar14', altText: 'KiaCar14', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar15, url: '/KiaCar15', altText: 'KiaCar15', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar16, url: '/KiaCar16', altText: 'KiaCar16', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar17, url: '/KiaCar17', altText: 'KiaCar17', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar18, url: '/KiaCar18', altText: 'KiaCar18', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar19, url: '/KiaCar19', altText: 'KiaCar19', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar20, url: '/KiaCar20', altText: 'KiaCar20', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar21, url: '/KiaCar21', altText: 'KiaCar21', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar22, url: '/KiaCar22', altText: 'KiaCar22', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar23, url: '/KiaCar23', altText: 'KiaCar23', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar24, url: '/KiaCar24', altText: 'KiaCar24', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar25, url: '/KiaCar25', altText: 'KiaCar25', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: KiaCar26, url: '/KiaCar26', altText: 'KiaCar26', type: 'Electric', sort: 'SUV' },
        { imgSrc: KiaCar27, url: '/KiaCar27', altText: 'KiaCar27', type: 'Electric', sort: 'SUV' },
        { imgSrc: KiaCar28, url: '/KiaCar28', altText: 'KiaCar28', type: 'Electric', sort: 'SUV' },
        
        { imgSrc: HyundaiCar1, url: '/HyundaiCar1', altText: 'HyundaiCar1', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar2, url: '/HyundaiCar2', altText: 'HyundaiCar2', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar3, url: '/HyundaiCar3', altText: 'HyundaiCar3', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar4, url: '/HyundaiCar4', altText: 'HyundaiCar4', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar5, url: '/HyundaiCar5', altText: 'HyundaiCar5', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar6, url: '/HyundaiCar6', altText: 'HyundaiCar6', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar7, url: '/HyundaiCar7', altText: 'HyundaiCar7', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar8, url: '/HyundaiCar8', altText: 'HyundaiCar8', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar9, url: '/HyundaiCar9', altText: 'HyundaiCar9', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar10, url: '/HyundaiCar10', altText: 'HyundaiCar10', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar11, url: '/HyundaiCar11', altText: 'HyundaiCar11', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar12, url: '/HyundaiCar12', altText: 'HyundaiCar12', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar13, url: '/HyundaiCar13', altText: 'HyundaiCar13', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar14, url: '/HyundaiCar14', altText: 'HyundaiCar14', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar15, url: '/HyundaiCar15', altText: 'HyundaiCar15', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar16, url: '/HyundaiCar16', altText: 'HyundaiCar16', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar17, url: '/HyundaiCar17', altText: 'HyundaiCar17', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar18, url: '/HyundaiCar18', altText: 'HyundaiCar18', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar19, url: '/HyundaiCar19', altText: 'HyundaiCar19', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar20, url: '/HyundaiCar20', altText: 'HyundaiCar20', type: 'Electric', sort: 'Sedan' },
        { imgSrc: HyundaiCar21, url: '/HyundaiCar21', altText: 'HyundaiCar21', type: 'Electric', sort: 'Sedan' },

        { imgSrc: JoyCar1, url: '/JoyCar1', altText: 'JoyCar1', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar2, url: '/JoyCar2', altText: 'JoyCar2', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar3, url: '/JoyCar3', altText: 'JoyCar3', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar4, url: '/JoyCar4', altText: 'JoyCar4', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar5, url: '/JoyCar5', altText: 'JoyCar5', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar6, url: '/JoyCar6', altText: 'JoyCar6', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar7, url: '/JoyCar7', altText: 'JoyCar7', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar8, url: '/JoyCar8', altText: 'JoyCar8', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar9, url: '/JoyCar9', altText: 'JoyCar9', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar10, url: '/JoyCar10', altText: 'JoyCar10', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar11, url: '/JoyCar11', altText: 'JoyCar11', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar12, url: '/JoyCar12', altText: 'JoyCar12', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar13, url: '/JoyCar13', altText: 'JoyCar13', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar14, url: '/JoyCar14', altText: 'JoyCar14', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar15, url: '/JoyCar15', altText: 'JoyCar15', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar16, url: '/JoyCar16', altText: 'JoyCar16', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar17, url: '/JoyCar17', altText: 'JoyCar17', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar18, url: '/JoyCar18', altText: 'JoyCar18', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar19, url: '/JoyCar19', altText: 'JoyCar19', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar20, url: '/JoyCar20', altText: 'JoyCar20', type: 'Electric', sort: 'Sedan' },
        { imgSrc: JoyCar21, url: '/JoyCar21', altText: 'JoyCar21', type: 'Electric', sort: 'Sedan' },


        { imgSrc: SamsungCar1, url: '/SamsungCar1', altText: 'SamsungCar1', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar2, url: '/SamsungCar2', altText: 'SamsungCar2', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar3, url: '/SamsungCar3', altText: 'SamsungCar3', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar4, url: '/SamsungCar4', altText: 'SamsungCar4', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar5, url: '/SamsungCar5', altText: 'SamsungCar5', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar6, url: '/SamsungCar6', altText: 'SamsungCar6', type: 'Electric', sort: 'Sedan' },
        { imgSrc: SamsungCar7, url: '/SamsungCar7', altText: 'SamsungCar7', type: 'Electric', sort: 'Sedan' },

        { imgSrc: SamsungCar8, url: '/SamsungCar8', altText: 'SamsungCar8', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar9, url: '/SamsungCar9', altText: 'SamsungCar9', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar10, url: '/SamsungCar10', altText: 'SamsungCar10', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar11, url: '/SamsungCar11', altText: 'SamsungCar11', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar12, url: '/SamsungCar12', altText: 'SamsungCar12', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar13, url: '/SamsungCar13', altText: 'SamsungCar13', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: SamsungCar14, url: '/SamsungCar14', altText: 'SamsungCar14', type: 'Gasoline', sort: 'Sedan' },

        { imgSrc: SsangyongCar1, url: '/SsangyongCar1', altText: 'SsangyongCar1', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar2, url: '/SsangyongCar2', altText: 'SsangyongCar2', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar3, url: '/SsangyongCar3', altText: 'SsangyongCar3', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar4, url: '/SsangyongCar4', altText: 'SsangyongCar4', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar5, url: '/SsangyongCar5', altText: 'SsangyongCar5', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar6, url: '/SsangyongCar6', altText: 'SsangyongCar6', type: 'Gasoline', sort: 'SUV' },
        { imgSrc: SsangyongCar7, url: '/SsangyongCar7', altText: 'SsangyongCar7', type: 'Gasoline', sort: 'SUV' },
        
        { imgSrc: ChevroletCar1, url: '/ChevroletCar1', altText: 'ChevroletCar1', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar2, url: '/ChevroletCar2', altText: 'ChevroletCar2', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar3, url: '/ChevroletCar3', altText: 'ChevroletCar3', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar4, url: '/ChevroletCar4', altText: 'ChevroletCar4', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar5, url: '/ChevroletCar5', altText: 'ChevroletCar5', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar6, url: '/ChevroletCar6', altText: 'ChevroletCar6', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar7, url: '/ChevroletCar7', altText: 'ChevroletCar7', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: ChevroletCar8, url: '/ChevroletCar8', altText: 'ChevroletCar8', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar9, url: '/ChevroletCar9', altText: 'ChevroletCar9', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar10, url: '/ChevroletCar10', altText: 'ChevroletCar10', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar11, url: '/ChevroletCar11', altText: 'ChevroletCar11', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar12, url: '/ChevroletCar12', altText: 'ChevroletCar12', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar13, url: '/ChevroletCar13', altText: 'ChevroletCar13', type: 'Electric', sort: 'Sedan' },
        { imgSrc: ChevroletCar14, url: '/ChevroletCar14', altText: 'ChevroletCar14', type: 'Electric', sort: 'Sedan' },

        { imgSrc: CargoTruck10, url: '/CargoTruck10', altText: 'CargoTruck10', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck11, url: '/CargoTruck11', altText: 'CargoTruck11', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck12, url: '/CargoTruck12', altText: 'CargoTruck12', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck13, url: '/CargoTruck13', altText: 'CargoTruck13', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck14, url: '/CargoTruck14', altText: 'CargoTruck14', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck15, url: '/CargoTruck15', altText: 'CargoTruck15', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck16, url: '/CargoTruck16', altText: 'CargoTruck16', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck17, url: '/CargoTruck17', altText: 'CargoTruck17', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck18, url: '/CargoTruck18', altText: 'CargoTruck18', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck19, url: '/CargoTruck19', altText: 'CargoTruck19', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck20, url: '/CargoTruck20', altText: 'CargoTruck20', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck21, url: '/CargoTruck21', altText: 'CargoTruck21', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck22, url: '/CargoTruck22', altText: 'CargoTruck22', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck23, url: '/CargoTruck23', altText: 'CargoTruck23', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck24, url: '/CargoTruck24', altText: 'CargoTruck24', type: 'Diesel', sort: 'Truck' },

        { imgSrc: CargoTruck25 , url: '/CargoTruck25', altText: 'CargoTruck25', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck26 , url: '/CargoTruck26', altText: 'CargoTruck26', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck27 , url: '/CargoTruck27', altText: 'CargoTruck27', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CargoTruck28 , url: '/CargoTruck28', altText: 'CargoTruck28', type: 'Diesel', sort: 'Truck' },
      
        { imgSrc: CarSpace1, url: '/CarSpace1', altText: 'MonkeyCar1', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace2, url: '/CarSpace2', altText: 'MonkeyCar2', type: 'Electric', sort: 'Bus' },
        { imgSrc: CarSpace3, url: '/CarSpace3', altText: 'MonkeyCar3', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace4, url: '/CarSpace4', altText: 'MonkeyCar4', type: 'Gasoline', sort: 'Suv' },
        { imgSrc: CarSpace5, url: '/CarSpace5', altText: 'MonkeyCar5', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace6, url: '/CarSpace6', altText: 'MonkeyCar6', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace7, url: '/CarSpace7', altText: 'MonkeyCar7', type: 'Gasoline', sort: 'Bus' },
        { imgSrc: CarSpace8, url: '/CarSpace8', altText: 'MonkeyCar8', type: 'Electric', sort: 'Suv' },
        { imgSrc: CarSpace9, url: '/CarSpace9', altText: 'MonkeyCar9', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace10, url: '/CarSpace10', altText: 'MonkeyCar10', type: 'Diesel', sort: 'Bus' },
        { imgSrc: CarSpace11, url: '/CarSpace11', altText: 'MonkeyCar11', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace12, url: '/CarSpace12', altText: 'MonkeyCar12', type: 'Diesel', sort: 'Suv' },
        { imgSrc: CarSpace13, url: '/CarSpace13', altText: 'MonkeyCar13', type: 'Diesel', sort: 'Bus' },
        { imgSrc: CarSpace14, url: '/CarSpace14', altText: 'MonkeyCar14', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace15, url: '/CarSpace15', altText: 'MonkeyCar15', type: 'Diesel', sort: 'Suv' },
        { imgSrc: CarSpace16, url: '/CarSpace16', altText: 'MonkeyCar16', type: 'Diesel', sort: 'Bus' },
        { imgSrc: CarSpace17, url: '/CarSpace17', altText: 'MonkeyCar17', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace18, url: '/CarSpace18', altText: 'MonkeyCar18', type: 'Electric', sort: 'Bus' },
        { imgSrc: CarSpace19, url: '/CarSpace19', altText: 'MonkeyCar19', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace20, url: '/CarSpace20', altText: 'MonkeyCar20', type: 'Gasoline', sort: 'Suv' },
        { imgSrc: CarSpace21, url: '/CarSpace21', altText: 'MonkeyCar21', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace22, url: '/CarSpace22', altText: 'MonkeyCar22', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace23, url: '/CarSpace23', altText: 'MonkeyCar23', type: 'Gasoline', sort: 'Bus' },
        { imgSrc: CarSpace24, url: '/CarSpace24', altText: 'MonkeyCar24', type: 'Electric', sort: 'Suv' },
        { imgSrc: CarSpace25, url: '/CarSpace25', altText: 'MonkeyCar25', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace26, url: '/CarSpace26', altText: 'MonkeyCar26', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpace27, url: '/CarSpace27', altText: 'MonkeyCar27', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace28, url: '/CarSpace28', altText: 'MonkeyCar28', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace29, url: '/CarSpace29', altText: 'MonkeyCar29', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace30, url: '/CarSpace30', altText: 'MonkeyCar30', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace31, url: '/CarSpace31', altText: 'MonkeyCar31', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace32, url: '/CarSpace32', altText: 'MonkeyCar32', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace33, url: '/CarSpace33', altText: 'MonkeyCar33', type: 'Diesel', sort: 'Sedan' },
        { imgSrc: CarSpace34, url: '/CarSpace34', altText: 'MonkeyCar34', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace35, url: '/CarSpace35', altText: 'MonkeyCar35', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace36, url: '/CarSpace36', altText: 'MonkeyCar36', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace37, url: '/CarSpace37', altText: 'MonkeyCar37', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace38, url: '/CarSpace38', altText: 'MonkeyCar38', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace39, url: '/CarSpace39', altText: 'MonkeyCar39', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace40, url: '/CarSpace40', altText: 'MonkeyCar40', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace41, url: '/CarSpace41', altText: 'MonkeyCar41', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace42, url: '/CarSpace42', altText: 'MonkeyCar42', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace43, url: '/CarSpace43', altText: 'MonkeyCar43', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace44, url: '/CarSpace44', altText: 'MonkeyCar44', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace45, url: '/CarSpace45', altText: 'MonkeyCar45', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace46, url: '/CarSpace46', altText: 'MonkeyCar46', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpace47, url: '/CarSpace47', altText: 'MonkeyCar47', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpace48, url: '/CarSpace48', altText: 'MonkeyCar48', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpace49, url: '/CarSpace49', altText: 'MonkeyCar49', type: 'Diesel', sort:   'SUV' },

        { imgSrc: CarSpaceCar1, url: '/CarSpaceCar1', altText: 'SmileCar1', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar2, url: '/CarSpaceCar2', altText: 'SmileCar2', type: 'Electric', sort: 'Bus' },
        { imgSrc: CarSpaceCar3, url: '/CarSpaceCar3', altText: 'SmileCar3', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar4, url: '/CarSpaceCar4', altText: 'SmileCar4', type: 'Gasoline', sort: 'Suv' },
        { imgSrc: CarSpaceCar5, url: '/CarSpaceCar5', altText: 'SmileCar5', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar6, url: '/CarSpaceCar6', altText: 'SmileCar6', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar7, url: '/CarSpaceCar7', altText: 'SmileCar7', type: 'Gasoline', sort: 'Bus' },
        { imgSrc: CarSpaceCar8, url: '/CarSpaceCar8', altText: 'SmileCar8', type: 'Electric', sort: 'Suv' },
        { imgSrc: CarSpaceCar9, url: '/CarSpaceCar9', altText: 'SmileCar9', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar10, url: '/CarSpaceCar10', altText: 'SmileCar10', type: 'Gasoline', sort: 'Bus' },
        { imgSrc: CarSpaceCar11, url: '/CarSpaceCar11', altText: 'SmileCar11', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar12, url: '/CarSpaceCar12', altText: 'SmileCar12', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar13, url: '/CarSpaceCar13', altText: 'SmileCar13', type: 'Gasoline', sort: 'Suv' },
        { imgSrc: CarSpaceCar14, url: '/CarSpaceCar14', altText: 'SmileCar14', type: 'Electric', sort: 'Bus' },
        { imgSrc: CarSpaceCar15, url: '/CarSpaceCar15', altText: 'SmileCar15', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar16, url: '/CarSpaceCar16', altText: 'SmileCar16', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar17, url: '/CarSpaceCar17', altText: 'SmileCar17', type: 'Electric', sort: 'Suv' },
        { imgSrc: CarSpaceCar18, url: '/CarSpaceCar18', altText: 'SmileCar18', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar19, url: '/CarSpaceCar19', altText: 'SmileCar19', type: 'Gasoline', sort: 'Bus' },
        { imgSrc: CarSpaceCar20, url: '/CarSpaceCar20', altText: 'SmileCar20', type: 'Electric', sort: 'Suv' },
        { imgSrc: CarSpaceCar21, url: '/CarSpaceCar21', altText: 'SmileCar21', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar22, url: '/CarSpaceCar22', altText: 'SmileCar22', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar23, url: '/CarSpaceCar23', altText: 'SmileCar23', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar24, url: '/CarSpaceCar24', altText: 'SmileCar24', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar25, url: '/CarSpaceCar25', altText: 'SmileCar25', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar26, url: '/CarSpaceCar26', altText: 'SmileCar26', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar27, url: '/CarSpaceCar27', altText: 'SmileCar27', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar28, url: '/CarSpaceCar28', altText: 'SmileCar28', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar29, url: '/CarSpaceCar29', altText: 'SmileCar29', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar30, url: '/CarSpaceCar30', altText: 'SmileCar30', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar31, url: '/CarSpaceCar31', altText: 'SmileCar31', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar32, url: '/CarSpaceCar32', altText: 'SmileCar32', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar33, url: '/CarSpaceCar33', altText: 'SmileCar33', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar34, url: '/CarSpaceCar34', altText: 'SmileCar34', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar35, url: '/CarSpaceCar35', altText: 'SmileCar35', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar36, url: '/CarSpaceCar36', altText: 'SmileCar36', type: 'Electric', sort: 'Truck' },
        { imgSrc: CarSpaceCar37, url: '/CarSpaceCar37', altText: 'SmileCar37', type: 'Diesel', sort: 'Truck' },
        { imgSrc: CarSpaceCar38, url: '/CarSpaceCar38', altText: 'SmileCar38', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar39, url: '/CarSpaceCar39', altText: 'SmileCar39', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar40, url: '/CarSpaceCar40', altText: 'SmileCar40', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar41, url: '/CarSpaceCar41', altText: 'SmileCar41', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar42, url: '/CarSpaceCar42', altText: 'SmileCar42', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar43, url: '/CarSpaceCar43', altText: 'SmileCar43', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar44, url: '/CarSpaceCar44', altText: 'SmileCar44', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar45, url: '/CarSpaceCar45', altText: 'SmileCar45', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar46, url: '/CarSpaceCar46', altText: 'SmileCar46', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar47, url: '/CarSpaceCar47', altText: 'SmileCar47', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar48, url: '/CarSpaceCar48', altText: 'SmileCar48', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar49, url: '/CarSpaceCar49', altText: 'SmileCar49', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar50, url: '/CarSpaceCar50', altText: 'SmileCar50', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar51, url: '/CarSpaceCar51', altText: 'SmileCar51', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar52, url: '/CarSpaceCar52', altText: 'SmileCar52', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar53, url: '/CarSpaceCar53', altText: 'SmileCar53', type: 'Diesel', sort:   'Sedan' },
        { imgSrc: CarSpaceCar54, url: '/CarSpaceCar54', altText: 'SmileCar54', type: 'Gasoline', sort: 'Sedan' },
        { imgSrc: CarSpaceCar55, url: '/CarSpaceCar55', altText: 'SmileCar55', type: 'Electric', sort: 'Sedan' },
        { imgSrc: CarSpaceCar56, url: '/CarSpaceCar56', altText: 'SmileCar56', type: 'Diesel', sort:   'Sedan' },
      ];


      // 검색어에 매치되는 결과만 필터링
      const results = files.filter(file => 
        file.altText.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        file.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        file.sort.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // 검색 결과를 type 속성으로 분류
      let categorizedResults = {
        Gasoline: [],
        Electric: [],
        Diesel: []
      };

      results.forEach(result => {
        categorizedResults[result.type].push(result);
      });

      // 분류된 결과를 배열로 변환하여 반환
      let finalResults = [];
      Object.keys(categorizedResults).forEach(type => {
        finalResults = finalResults.concat(categorizedResults[type]);
      });

      this.$emit('search', finalResults);
    }
  }
};
</script>

<style scoped>
.search-with-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.search-with-buttons input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}


</style>
