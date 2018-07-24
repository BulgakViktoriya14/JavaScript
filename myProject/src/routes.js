import Reports from './components/content/ContentReport.vue';
import Tasks from './components/content/ContentTask.vue';
import WorkTime from './components/content/ContentTime.vue';
import SignIn from './components/signin/SignIn.vue';
import WorkSpace from './components/workspace/WorkSpace.vue';
import Admin from './components/content/ContentAdmin.vue';
import User from './components/content/ContentUser.vue';

export const routes = [
	{path: '/', component: SignIn},
	{path: '/SignIn', component: SignIn},
	{path: '/WorkSpace', component: WorkSpace, children: [
			{path: 'Tasks', component: Tasks},
			{path: 'WorkTime', component: WorkTime},
			{path: 'Reports', component: Reports},
			{path: 'Admin', component: Admin},
			{path: 'User', component: User},
	]},
]