import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    moduleName: '',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },



  
  //configutarion
  {
    path: '',
    title: 'MENUITEMS.CONFIG.TEXT',
    moduleName: 'configuration',
    iconType: 'material-icons-two-tone',
    icon: 'app_registration',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: 'admin/config/configuration',
        title: 'MENUITEMS.CONFIG.LIST.config',
        moduleName: 'configuration',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
     
    ],
  },
  
 

  
     
];
