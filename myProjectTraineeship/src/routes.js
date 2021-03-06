import Reports from './components/content/ContentReport.vue';
import Tasks from './components/content/ContentTask.vue';
import WorkTime from './components/content/ContentTime.vue';
import SignIn from './components/signin/SignIn.vue';
import WorkSpace from './components/workspace/WorkSpace.vue';
import Admin from './components/content/ContentAdmin.vue';
import User from './components/content/ContentUser.vue';
import CheckIn from './components/content/ContentCheckIn.vue';
import Delete from './components/content/ContentDelete.vue';
import NotFound from './components/content/ContentNotFound.vue';

export const routes = [
	{path: '/', component: SignIn},
	{path: '/SignIn', component: SignIn},
	{path: '/WorkSpace', component: WorkSpace, children: [
			{path: 'tasks', component: Tasks},
			{path: 'worktimes', component: WorkTime},
			{path: 'reports', component: Reports},
			{path: 'users/:login/tasks', component: Tasks},
			{path: 'users/:login/worktimes', component: WorkTime},
			{path: 'users/:login/reports', component: Reports},
			{path: 'Admin', component: Admin},
			{path: 'users/:login', component: User},
			{path: 'CheckIn', component: CheckIn},
			{path: 'Delete', component: Delete},
			{path: 'NotFound', component: NotFound}
	]},
]