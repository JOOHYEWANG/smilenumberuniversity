import store from '@/vuex/store';

import { createRouter, createWebHistory } from 'vue-router';
import Grid from '../views/Grid.vue';
import HomeVue from '../views/HomeVue.vue';
import AboutVue from '../views/AboutVue.vue';
import HelloSmileMonkey from '../views/HelloSmileMonkey.vue';
import SearchButtonGrid from '../views/SearchButtonGrid.vue';
import CarSpaceCarGrid0 from '../views/CarDetailsType/CarSpaceCarGrid0.vue';
import CarSpaceCarGrid1 from '../views/CarDetailsType/CarSpaceCarGrid1.vue';
import CarSpaceCarGrid2 from '../views/CarDetailsType/CarSpaceCarGrid2.vue';
import CarSpaceCarGrid3 from '../views/CarDetailsType/CarSpaceCarGrid3.vue';
import CarSpaceCarGrid4 from '../views/CarDetailsType/CarSpaceCarGrid4.vue';
import CarSpaceCarGrid5 from '../views/CarDetailsType/CarSpaceCarGrid5.vue';
import CarSpaceCarGridKia from '../views/CarDetailsType/CarSpaceCarGridKia.vue';
import CarSpaceCarGridSamsung from '../views/CarDetailsType/CarSpaceCarGridSamsung.vue';
import CarSpaceCarGridHyundai from '../views/CarDetailsType/CarSpaceCarGridHyundai.vue';
import CarSpaceCarGridSsangyong from '../views/CarDetailsType/CarSpaceCarGridSsangyong.vue';
import CarSpaceCarGridChevrolet from '../views/CarDetailsType/CarSpaceCarGridChevrolet.vue';
import CarSpaceCarGridJoy from '../views/CarDetailsType/CarSpaceCarGridJoy.vue';
import CarSpaceCarGridSmileTruck from '../views/CarDetailsType/CarSpaceCarGridSmileTruck.vue';

import SunFlowerText from '../views/SunFlowerText.vue';
import SunFlowerText1 from '../views/SunFlowerText1.vue';
import SunFlowerText2 from '../views/SunFlowerText2.vue';
import SunFlowerText3 from '../views/SunFlowerText3.vue';

import FileUpload from '../views/FileUpload.vue';
import MonkeyRun from '../views/MonkeyRun.vue';

import OurCar1 from '../views/OurCar1.vue';
import OurCar2 from '../views/OurCar2.vue';
import OurCar3 from '../views/OurCar3.vue';
import OurCar4 from '../views/OurCar4.vue';
import OurCar5 from '../views/OurCar5.vue';
import OurCar6 from '../views/OurCar6.vue';
import OurCar7 from '../views/OurCar7.vue';
import OurCar8 from '../views/OurCar8.vue';
import OurCar9 from '../views/OurCar9.vue';
import OurCar10 from '../views/OurCar10.vue';

import AfricaStory1 from '../views/AfricaStory1.vue';
import AfricaStory2 from '../views/AfricaStory2.vue';
import AfricaStory3 from '../views/AfricaStory3.vue';
import AfricaStoryButtonTest from '../views/AfricaStoryButtonTest.vue';

import ChatGPT from '../views/ChatGPT.vue';
import LanguageButton from '../views/LanguageButton.vue';
import LanguageDropdown from '../views/LanguageDropdown.vue';
import LanguageDropdownTest from '../views/LanguageDropdownTest.vue';

import LoginPage from '../views/LoginPage.vue';


import CustomerLoginPage from '@/views/CustomerLoginPage.vue';
import DealerLoginPage from '@/views/DealerLoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import ThreeLoginButton from '@/views/ThreeLoginButton.vue';

import Dream from '../views/Dream.vue';
import MapVue from '../views/MapVue.vue';
import ScheduleDetail from '../views/ScheduleDetail.vue';
import ChildDetail from '../views/ChildDetail.vue';

import RainbowMenu from '../views/RainbowMenu.vue';
import ContactVue from '../views/ContactVue.vue';

import bus1 from '../views/details/bus1.vue';
import bus2 from '../views/details/bus2.vue';
import truck1 from '../views/details/truck1.vue';
import truck2 from '../views/details/truck2.vue';
import sedan1 from '../views/details/sedan1.vue';
import sedan2 from '../views/details/sedan2.vue';
import SUV1 from '../views/details/SUV1.vue';
import SUV2 from '../views/details/SUV2.vue';

import CarSales from '../views/CarSales.vue';
import FlagButton from '../views/FlagButton.vue';

import AdminLoginPage from '../views/AdminLoginPage.vue';
import AdminMessagesPage from '../views/AdminMessagesPage.vue';
import DealerFileUploadPage from '@/views/DealerFileUploadPage.vue';
import CarGasoline from '../views/CarGasoline/CarGasoline.vue';
import ShipSchedule from '../views/ShipSchedule.vue';

import ShipSchedule1 from '../views/ShipSchedule1.vue';
import ShipSchedule2 from '../views/ShipSchedule2.vue';
import ShipSchedule3 from '../views/ShipSchedule3.vue';
import ShipSchedule4 from '../views/ShipSchedule4.vue';
import ShipSchedule5 from '../views/ShipSchedule5.vue';
import ShipSchedule6 from '../views/ShipSchedule6.vue';
import ShipSchedule7 from '../views/ShipSchedule7.vue';
import ShipSchedule8 from '../views/ShipSchedule8.vue';
import ShipSchedule9 from '../views/ShipSchedule9.vue';
import ShipSchedule10 from '../views/ShipSchedule10.vue';

import JesusSaid from '../views/JesusSaid.vue';
import SearchComponent from '../components/SearchComponent.vue';
import MapSearchComponent from '../components/MapSearchComponent.vue';

import CarRandomGrid from '../views/CarRandomGrid.vue';
import HowToBuyCar from '../views/HowToBuyCar.vue';
import ButtonComponent from '../components/ButtonComponent.vue';

import CarList from '../views/CarList.vue';
import CarDetail from '../views/CarDetail.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeVue },
  { path: '/search/:query', name: 'Search', component: SearchComponent },
  { path: '/MapSearchComponent', name: 'MapSearchComponent', component: MapSearchComponent },
  { path: '/aboutVue', name: 'AboutVue', component: AboutVue },
  { path: '/flagButton', name: 'FlagButton', component: FlagButton },
  { path: '/buttonComponent', name: 'ButtonComponent', component: ButtonComponent },
  { path: '/dream', name: 'Dream', component: Dream },
  { path: '/MapVue', name: 'MapVue', component: MapVue },
  { path: '/LoginPage', name: 'LoginPage', component: LoginPage },
  { path: '/CarList', name: 'CarList', component: CarList },
  { path: '/CarDetail', name: 'CarDetail', component: CarDetail },
  { path: '/OurCar1', name: 'OurCar1', component: OurCar1 },
  { path: '/OurCar2', name: 'OurCar2', component: OurCar2 },
  { path: '/OurCar3', name: 'OurCar3', component: OurCar3 },
  { path: '/OurCar4', name: 'OurCar4', component: OurCar4 },
  { path: '/OurCar5', name: 'OurCar5', component: OurCar5 },
  { path: '/OurCar6', name: 'OurCar6', component: OurCar6 },
  { path: '/OurCar7', name: 'OurCar7', component: OurCar7 },
  { path: '/OurCar8', name: 'OurCar8', component: OurCar8 },
  { path: '/OurCar9', name: 'OurCar9', component: OurCar9 },
  { path: '/OurCar10', name: 'OurCar10', component: OurCar10 },
  { path: '/ChatGPT', name: 'ChatGPT', component: ChatGPT },
  { path: '/LanguageButton', name: 'LanguageButton', component: LanguageButton },
  { path: '/FileUpload', name: 'FileUpload', component: FileUpload },
  { path: '/MonkeyRun', name: 'MonkeyRun', component: MonkeyRun },
  { path: '/CarSpaceCarGridSmileTruck', name: 'CarSpaceCarGridSmileTruck', component: CarSpaceCarGridSmileTruck },
  { path: '/sunFlowerText', name: 'SunFlowerText', component: SunFlowerText },
  { path: '/sunFlowerText1', name: 'SunFlowerText1', component: SunFlowerText1 },
  { path: '/sunFlowerText2', name: 'SunFlowerText2', component: SunFlowerText2 },
  { path: '/sunFlowerText3', name: 'SunFlowerText3', component: SunFlowerText3 },
  { path: '/AfricaStory1', name: 'AfricaStory1', component: AfricaStory1 },
  { path: '/AfricaStory2', name: 'AfricaStory2', component: AfricaStory2 },
  { path: '/AfricaStory3', name: 'AfricaStory3', component: AfricaStory3 },
  { path: '/AfricaStoryButtonTest', name: 'AfricaStoryButtonTest', component: AfricaStoryButtonTest },
  { path: '/LanguageDropdown', name: 'LanguageDropdown', component: LanguageDropdown },
  { path: '/LanguageDropdownTest', name: 'LanguageDropdownTest', component: LanguageDropdownTest },
  { path: '/bus1', name: 'bus1', component: bus1 },
  { path: '/bus2', name: 'bus2', component: bus2 },
  { path: '/truck1', name: 'truck1', component: truck1 },
  { path: '/truck2', name: 'truck2', component: truck2 },
  { path: '/sedan1', name: 'sedan1', component: sedan1 },
  { path: '/sedan2', name: 'sedan2', component: sedan2 },
  { path: '/SUV1', name: 'SUV1', component: SUV1 },
  { path: '/SUV2', name: 'SUV2', component: SUV2 },

  { path: '/AdminLoginPage', name: 'AdminLoginPage', component: AdminLoginPage },
  { path: '/CustomerLoginPage', name: 'CustomerLoginPage', component: CustomerLoginPage },
  { path: '/DealerLoginPage', name: 'DealerLoginPage', component: DealerLoginPage },
  { path: '/DealerFileUploadPage', name: 'DealerFileUploadPage', component: DealerFileUploadPage },
  { path: '/AdminMessagesPage', name: 'AdminMessagesPagee', component: AdminMessagesPage },
  { path: '/RegisterPage', name: 'RegisterPagee', component: RegisterPage },
  { path: '/ThreeLoginButton', name: 'ThreeLoginButton', component: ThreeLoginButton },

  { path: '/carRandomGrid', name: 'CarRandomGrid', component: CarRandomGrid },
  { path: '/helloSmileMonkey', name: 'HelloSmileMonkey', component: HelloSmileMonkey },
  { path: '/contactVue', name: 'ContactVue', component: ContactVue },
  { path: '/grid', name: 'Grid', component: Grid },
  { path: '/Grid/:id', name: 'childrenDetail', component: ChildDetail },
  { path: '/carSales', name: 'CarSales', component: CarSales },
  { path: '/howToBuyCar', name: 'HowToBuyCar', component: HowToBuyCar },
  { path: '/searchButtonGrid', name: 'SearchButtonGrid', component: SearchButtonGrid },
  { path: '/carSpaceCarGrid0', name: 'CarSpaceCarGrid0', component: CarSpaceCarGrid0 },
  { path: '/carSpaceCarGrid1', name: 'CarSpaceCarGrid1', component: CarSpaceCarGrid1 },
  { path: '/carSpaceCarGrid2', name: 'CarSpaceCarGrid2', component: CarSpaceCarGrid2 },
  { path: '/carSpaceCarGrid3', name: 'CarSpaceCarGrid3', component: CarSpaceCarGrid3 },
  { path: '/carSpaceCarGrid4', name: 'CarSpaceCarGrid4', component: CarSpaceCarGrid4 },
  { path: '/carSpaceCarGrid5', name: 'CarSpaceCarGrid5', component: CarSpaceCarGrid5 },
  { path: '/carSpaceCarGridKia', name: 'CarSpaceCarGridKia', component: CarSpaceCarGridKia },
  { path: '/carSpaceCarGridHyundai', name: 'CarSpaceCarGridHyundai', component: CarSpaceCarGridHyundai },
  { path: '/carSpaceCarGridSamsung', name: 'CarSpaceCarGridSamsung', component: CarSpaceCarGridSamsung },
  { path: '/carSpaceCarGridSsangyong', name: 'CarSpaceCarGridSsangyong', component: CarSpaceCarGridSsangyong },
  { path: '/carSpaceCarGridChevrolet', name: 'CarSpaceCarGridChevrolet', component: CarSpaceCarGridChevrolet },
  { path: '/carSpaceCarGridJoy', name: 'CarSpaceCarGridJoy', component: CarSpaceCarGridJoy },
  { path: '/rainbowMenu', name: 'RainbowMenu', component: RainbowMenu },
  { path: '/carGasoline', name: 'CarGasoline', component: CarGasoline },
  { path: '/shipSchedule', name: 'ShipSchedule', component: ShipSchedule },
  { path: '/shipSchedule1', name: 'ShipSchedule1', component: ShipSchedule1 },
  { path: '/shipSchedule2', name: 'ShipSchedule2', component: ShipSchedule2 },
  { path: '/shipSchedule3', name: 'ShipSchedule3', component: ShipSchedule3 },
  { path: '/shipSchedule4', name: 'ShipSchedule4', component: ShipSchedule4 },
  { path: '/shipSchedule5', name: 'ShipSchedule5', component: ShipSchedule5 },
  { path: '/shipSchedule6', name: 'ShipSchedule6', component: ShipSchedule6 },
  { path: '/shipSchedule7', name: 'ShipSchedule7', component: ShipSchedule7 },
  { path: '/shipSchedule8', name: 'ShipSchedule8', component: ShipSchedule8 },
  { path: '/shipSchedule9', name: 'ShipSchedule9', component: ShipSchedule9 },
  { path: '/shipSchedule10', name: 'ShipSchedule10', component: ShipSchedule10 },
  { path: '/ShipSchedule/:id', name: 'scheduleDetail', component: ScheduleDetail },
  { path: '/jesusSaid', name: 'JesusSaid', component: JesusSaid },
];

// Generate SmileTruck routes dynamically
for (let i = 1; i <= 21; i++) {
  routes.push({ path: `/SmileTruck${i}`, name: `SmileTruck${i}`, component: () => import(`../views/SmileTruck/SmileTruck${i}.vue`) });
}

// Generate JoyCar routes dynamically
for (let i = 1; i <= 21; i++) {
  routes.push({ path: `/JoyCar${i}`, name: `JoyCar${i}`, component: () => import(`../views/JoyCar/JoyCar${i}.vue`) });
}

// Generate ChevroletCar routes dynamically
for (let i = 1; i <= 14; i++) {
  routes.push({ path: `/ChevroletCar${i}`, name: `ChevroletCar${i}`, component: () => import(`../views/ChevroletCar/ChevroletCar${i}.vue`) });
}

// Generate SsangyongCar routes dynamically
for (let i = 1; i <= 7; i++) {
  routes.push({ path: `/SsangyongCar${i}`, name: `SsangyongCar${i}`, component: () => import(`../views/SsangyongCar/SsangyongCar${i}.vue`) });
}

// Generate SamsungCar routes dynamically
for (let i = 1; i <= 14; i++) {
  routes.push({ path: `/samsungCar${i}`, name: `SamsungCar${i}`, component: () => import(`../views/SamsungCar/SamsungCar${i}.vue`) });
}

// Generate KiaCar routes dynamically
for (let i = 1; i <= 28; i++) {
  routes.push({ path: `/kiaCar${i}`, name: `KiaCar${i}`, component: () => import(`../views/KiaCar/KiaCar${i}.vue`) });
}

// Generate HyundaiCar routes dynamically
for (let i = 1; i <= 21; i++) {
  routes.push({ path: `/hyundaiCar${i}`, name: `HyundaiCar${i}`, component: () => import(`../views/HyundaiCar/HyundaiCar${i}.vue`) });
}

// Generate carSpace routes dynamically
for (let i = 1; i <= 49; i++) {
  routes.push({ path: `/carSpace${i}`, name: `CarSpace${i}`, component: () => import(`../views/CarSpace/CarSpace${i}.vue`) });
}

// Generate carSpaceCar routes dynamically
for (let i = 1; i <= 56; i++) {
  routes.push({ path: `/carSpaceCar${i}`, name: `CarSpaceCar${i}`, component: () => import(`../views/CarDetails/CarSpaceCar${i}.vue`) });
}

// Generate cargoTruck routes dynamically
for (let i = 1; i <= 28; i++) {
  routes.push({ path: `/cargoTruck${i}`, name: `CargoTruck${i}`, component: () => import(`../views/CargoTruck/CargoTruck${i}.vue`) });
}

// Generate carGasoline routes dynamically
for (let i = 1; i <= 12; i++) {
  routes.push({ path: `/carGasoline${i}`, name: `CarGasoline${i}`, component: () => import(`../views/CarGasoline/CarGasoline${i}.vue`) });
}

const requireAuth = () => (from, to, next) => {
  if (store.getters.getIsAuth) return next(); // isAuth === true면 페이지 이동
  next('/'); // isAuth === false면 다시 로그인 화면으로 이동
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});


export default router;
