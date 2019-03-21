import MainPage from "./components/content/ContentMainPage.vue";
import Catalog from "./components/content/ContentCatalog.vue";
import DeliveryAndPayment from "./components/content/ContentDeliveryAndPayment.vue";
import About from "./components/content/ContentAbout.vue";
import SignIn from "./componentS/content/ContentSignIn.vue";
import CheckIn from "./componentS/content/ContentCheckIn.vue";
import Basket from "./componentS/content/ContentBasket.vue";

export const routes = [
	{path: '/', component: MainPage},
	{path: '/main-page', component: MainPage},
	{path: '/catalog/:view', component: Catalog},
	{path: '/delivery-and-payment', component: DeliveryAndPayment},
	{path: '/about', component: About},
	{path: '/sign-in', component: SignIn},
	{path: '/check-in', component: CheckIn},
	{path: '/basket', component: Basket}
]