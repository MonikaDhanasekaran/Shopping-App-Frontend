import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Auth

import LoginComponent from './Components/AuthComponents/LoginComponent';
import RegisterComponent from './Components/AuthComponents/RegisterComponent';
import ForgotPasswordComponent from './Components/AuthComponents/ForgotPasswordComponent';

// Product Categories

import ShoppingPageComponent from './Components/HomeComponents/ShoppingPageComponent';
import PopularItem from './Components/HomeComponents/PopularItemComponent';
import NewArrival from './Components/HomeComponents/NewArrivalComponent';
import AllProductComponent from './Components/HomeComponents/AllProductsComponent';
import MobileCategoriesComponent from './Components/HomeComponents/MobileCategories';
import ElectronicsCategoriesComponent from './Components/HomeComponents/ElectronicsCategories';
import AppliancesCategoriesComponent from './Components/HomeComponents/AppliancesCategories';
import FashionCategoriesComponent from './Components/HomeComponents/FashionCategories';
import HomeCategoriesComponent from './Components/HomeComponents/HomeCategories';
import PersonalCareCategoriesComponent from './Components/HomeComponents/PersonalCareCategories';
import ToysAndBabyCareCategoriesComponent from './Components/HomeComponents/ToysAndBabyCareCategories';
import FurnitureCategoriesComponent from './Components/HomeComponents/FurnitureCategories';
import SportsCategoriesComponent from './Components/HomeComponents/SportsCategories';
import NutritionAndMoreCategoriesComponent from './Components/HomeComponents/NutritionAndMoreCategories';

// Mobiles

import RealmeMobile from './Components/Mobiles/RealmeMobile';
import PocoMobile from './Components/Mobiles/PocoMobile';
import SamsungMobile from './Components/Mobiles/SamsungMobile';
import VivoMobile from './Components/Mobiles/VivoMobile';
import AppleMobile from './Components/Mobiles/AppleMobile';
import MotorolaMobile from './Components/Mobiles/MotorolaMobile';
import XiaomiMobile from './Components/Mobiles/XiaomiMobile';
import OppoMobile from './Components/Mobiles/OppoMobile';
import GooglePixelMobile from './Components/Mobiles/GooglePixelMobile';

// Electronics

import LaptopsAndDesktops from './Components/Electronics/LaptopsAndDesktops';
import Laptops from './Components/Electronics/Laptops';
import Desktops from './Components/Electronics/Desktops';
import HeadPhones from './Components/Electronics/HeadPhones';
import SmartWearables from './Components/Electronics/SmartWearables';
import StylingDevices from './Components/Electronics/StylingDevices';
import Cameras from './Components/Electronics/Cameras';
import Tablets from './Components/Electronics/Tablets';
import ComputerAccessories from './Components/Electronics/ComputerAccessories';
import MobileProtection from './Components/Electronics/MobileProtection';
import Powerbanks from './Components/Electronics/PowerBanks';
import Speakers from './Components/Electronics/Speakers';
import MobileAccessories from './Components/Electronics/MobileAccessories';

// Appliances

import SmartTv from './Components/Appliances/SmartTv';
import WashingMachine from './Components/Appliances/WashingMachine';
import Refrigerators from './Components/Appliances/Refrigerators';
import FansAndAirCoolers from './Components/Appliances/FansAndAirCoolers';
import KitchenAppliances from './Components/Appliances/KitchenAppliances';
import AirConditioners from './Components/Appliances/AirConditioners';
import HomeAppliances from './Components/Appliances/HomeAppliances';
import MicrowaveOven from './Components/Appliances/MicrowaveOvens';

// Fashion

import TShirts from './Components/Fashion/T-shirts';
import Jean from './Components/Fashion/Jean';
import TrackPants from './Components/Fashion/TrackPants';
import SportsShoes from './Components/Fashion/SportsShoes';
import SareesAndKurtas from './Components/Fashion/SareesAndKurtas';
import WomenFootwear from './Components/Fashion/WomenFootwear';
import LuggagesAndBags from './Components/Fashion/LuggageAndBags';
import KidsFashion from './Components/Fashion/KidsFashion';

// Home

import KitchenAndCookware from './Components/Home/KitchenAndCookware';
import Bedsheets from './Components/Home/Bedsheets';
import CleaningEssentials from './Components/Home/CleaningEssentials';
import DiningAndServeware from './Components/Home/DiningAndServeware';
import GardeningEssentials from './Components/Home/GardeningEssentials';
import HomeDecor from './Components/Home/HomeDecor';
import HomeFurnishing from './Components/Home/HomeFurnishing';
import Lightning from './Components/Home/Lightning';

// Personal Care

import SkinCare from './Components/PersonalCare/SkinCare';
import HairCare from './Components/PersonalCare/HairCare';
import Makeup from './Components/PersonalCare/Makeup';
import Fragrances from './Components/PersonalCare/Fragrances';
import DailyEssentials from './Components/PersonalCare/DailyEssentials';
import MenGrooming from './Components/PersonalCare/MenGrooming';
import OralCare from './Components/PersonalCare/OralCare';

// Toys and Baby Care

import BabyCareEssentials from './Components/ToysAndBabyCare/BabyCareEssentials';
import ToysAndGames from './Components/ToysAndBabyCare/ToysAndGames';
import GuidanceForParents from './Components/ToysAndBabyCare/GuidanceForParents';
import StationeryAndSchoolSupplies from './Components/ToysAndBabyCare/StationeryAndSchoolSupplies';

// Furniture

import Sofas from './Components/Furniture/Sofas';
import Beds from './Components/Furniture/Beds';
import WardRobes from './Components/Furniture/Wardrobes';
import DiningTables from './Components/Furniture/DiningTables';
import OfficeChairs from './Components/Furniture/OfficeChairs';
import Recliners from './Components/Furniture/Recliners';
import TVUnits from './Components/Furniture/TVUnits';
import PortableLaptopTables from './Components/Furniture/PortableLaptopTables';
import Swings from './Components/Furniture/Swings';

// Sports

import SportShoes from './Components/Sports/SportShoes';
import SportsWear from './Components/Sports/SportsWear';
import SportsGear from './Components/Sports/SportsGear';
import FitnessEquipments from './Components/Sports/FitnessEquipments';

// Nutrition and More

import FoodAndBeverages from './Components/NutritionAndMore/FoodAndBeverages';
import NutritionAndHealthCare from './Components/NutritionAndMore/NutritionAndHealthCare';
import SportsAndFitness from './Components/NutritionAndMore/SportsAndFitness';
import AutoAccessories from './Components/NutritionAndMore/AutoAccessories';
import PetSupplies from './Components/NutritionAndMore/PetSupplies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginComponent /> } />
          <Route path="/signup" element={ <RegisterComponent /> } />
          <Route path="/forgotpassword" element={ <ForgotPasswordComponent /> } />

          <Route path="/shop" element={ <ShoppingPageComponent /> } />
          <Route path="/shop/popularItem" element={ <PopularItem /> } />
          <Route path="/shop/newArrival" element={ <NewArrival /> } />
          <Route path="/categories" element={ <AllProductComponent /> } />
          <Route path="/mobileCategories" element={ <MobileCategoriesComponent /> } />
          <Route path="/electronicsCategories" element={ <ElectronicsCategoriesComponent /> } />
          <Route path="/appliancesCategories" element={ <AppliancesCategoriesComponent /> } />
          <Route path="/fashionCategories" element={ <FashionCategoriesComponent /> } />
          <Route path="/homeCategories" element={ <HomeCategoriesComponent /> } />
          <Route path="/personalCareCategories" element={ <PersonalCareCategoriesComponent /> } />
          <Route path="/toysAndBabyCareCategories" element={ <ToysAndBabyCareCategoriesComponent /> } />
          <Route path="/furnitureCategories" element={ <FurnitureCategoriesComponent /> } />
          <Route path="/sportsCategories" element={ <SportsCategoriesComponent /> } />
          <Route path="/nutritionAndMoreCategories" element={ <NutritionAndMoreCategoriesComponent /> } />

          <Route path="/mobile/realme" element={ <RealmeMobile /> } />
          <Route path="/mobile/poco" element={ <PocoMobile /> } />
          <Route path="/mobile/samsung" element={ <SamsungMobile /> } />
          <Route path="/mobile/vivo" element={ <VivoMobile /> } />
          <Route path="/mobile/apple" element={ <AppleMobile /> } />
          <Route path="/mobile/motorola" element={ <MotorolaMobile /> } />
          <Route path="/mobile/xiaomi" element={ <XiaomiMobile /> } />
          <Route path="/mobile/oppo" element={ <OppoMobile /> } />
          <Route path="/mobile/googlePixel" element={ <GooglePixelMobile /> } />

          <Route path="/electronics/laptopsAndDesktops" element={ <LaptopsAndDesktops /> } />
          <Route path="/electronics/laptops" element={ <Laptops /> } />
          <Route path="/electronics/desktops" element={ <Desktops /> } />
          <Route path="/electronics/headphones" element={ <HeadPhones /> } />
          <Route path="/electronics/smartWearables" element={ <SmartWearables /> } />
          <Route path="/electronics/stylingDevices" element={ <StylingDevices /> } />
          <Route path="/electronics/cameras" element={ <Cameras /> } />
          <Route path="/electronics/tablets" element={ <Tablets /> } />
          <Route path="/electronics/computerAccessories" element={ <ComputerAccessories /> } />
          <Route path="/electronics/mobileProtection" element={ <MobileProtection /> } />
          <Route path="/electronics/powerBanks" element={ <Powerbanks /> } />
          <Route path="/electronics/speakers" element={ <Speakers /> } />
          <Route path="/electronics/mobileAccessories" element={ <MobileAccessories /> } />

          <Route path="/appliances/smartTV" element={ <SmartTv /> } />
          <Route path="/appliances/washingMachine" element={ <WashingMachine /> } />
          <Route path="/appliances/refrigerators" element={ <Refrigerators /> } />
          <Route path="/appliances/fansAndAirCoolers" element={ <FansAndAirCoolers /> } />
          <Route path="/appliances/kitchenAppliances" element={ <KitchenAppliances /> } />
          <Route path="/appliances/airConditioners" element={ <AirConditioners /> } />
          <Route path="/appliances/homeAppliances" element={ <HomeAppliances /> } />
          <Route path="/appliances/microwaveOven" element={ <MicrowaveOven /> } />

          <Route path="/fashion/tShirts" element={ <TShirts /> } />
          <Route path="/fashion/jean" element={ <Jean /> } />
          <Route path="/fashion/trackPants" element={ <TrackPants /> } />
          <Route path="/fashion/sportsShoes" element={ <SportsShoes /> } />
          <Route path="/fashion/sareesAndKurti" element={ <SareesAndKurtas /> } />
          <Route path="/fashion/womenFootwear" element={ <WomenFootwear /> } />
          <Route path="/fashion/luggageAndBags" element={ <LuggagesAndBags /> } />
          <Route path="/fashion/kidsFashion" element={ <KidsFashion /> } />

          <Route path="/home/kitchenAndCookware" element={ <KitchenAndCookware /> } />
          <Route path="/home/bedSheets" element={ <Bedsheets /> } />
          <Route path="/home/cleaningEssentials" element={ <CleaningEssentials /> } />
          <Route path="/home/diningServeware" element={ <DiningAndServeware /> } />
          <Route path="/home/gardeningEssentials" element={ <GardeningEssentials /> } />
          <Route path="/home/homeDecor" element={ <HomeDecor /> } />
          <Route path="/home/homeFurnishing" element={ <HomeFurnishing /> } />
          <Route path="/home/lightning" element={ <Lightning /> } />

          <Route path="/personalCare/skinCare" element={ <SkinCare /> } />
          <Route path="/personalCare/hairCare" element={ <HairCare /> } />
          <Route path="/personalCare/makeup" element={ <Makeup /> } />
          <Route path="/personalCare/fragrances" element={ <Fragrances /> } />
          <Route path="/personalCare/dailyEssentials" element={ <DailyEssentials /> } />
          <Route path="/personalCare/menGrooming" element={ <MenGrooming /> } />
          <Route path="/personalCare/oralCare" element={ <OralCare /> } />

          <Route path="/toysAndBabyCare/babyCareEssentials" element={ <BabyCareEssentials /> } />
          <Route path="/toysAndBabyCare/toysAndGames" element={ <ToysAndGames /> } />
          <Route path="/toysAndBabyCare/guidanceForParents" element={ <GuidanceForParents /> } />
          <Route path="/toysAndBabyCare/stationeryAndSchoolSupplies" element={ <StationeryAndSchoolSupplies /> } />

          <Route path="/furniture/sofas" element={ <Sofas /> } />
          <Route path="/furniture/beds" element={ <Beds /> } />
          <Route path="/furniture/wardRobes" element={ <WardRobes /> } />
          <Route path="/furniture/diningTables" element={ <DiningTables /> } />
          <Route path="/furniture/officeChairs" element={ <OfficeChairs /> } />
          <Route path="/furniture/recliners" element={ <Recliners /> } />
          <Route path="/furniture/tvUnits" element={ <TVUnits /> } />
          <Route path="/furniture/portableLaptopTables" element={ <PortableLaptopTables /> } />
          <Route path="/furniture/swings" element={ <Swings /> } />

          <Route path="/sports/sportsShoes" element={ <SportShoes /> } />
          <Route path="/sports/sportsWear" element={ <SportsWear /> } />
          <Route path="/sports/sportsGear" element={ <SportsGear /> } />
          <Route path="/sports/fitnessEquipments" element={ <FitnessEquipments /> } />

          <Route path="/nutritionAndMore/foodAndBeverages" element={ <FoodAndBeverages /> }/>
          <Route path="/nutritionAndMore/nutritionAndHealthCare" element={ <NutritionAndHealthCare /> }/>
          <Route path="/nutritionAndMore/sportsAndFitness" element={ <SportsAndFitness /> }/>
          <Route path="/nutritionAndMore/autoAccessories" element={ <AutoAccessories /> }/>
          <Route path="/nutritionAndMore/petsSupplies" element={ <PetSupplies /> }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;