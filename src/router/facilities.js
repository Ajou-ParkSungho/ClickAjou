
import Facmenu from '../view/facilities/facmenu'
import FacplaceFirst from '../view/facilities/facplaceFirst'
import FactimeFirst from '../view/facilities/factimeFirst'
import Facselect from '../view/facilities/facselect'
import FacInfo from '../view/facilities/facInfo'


export default [
    {
      path: '/menu/facmenu',
      name: 'Facmenu',
      component: Facmenu
    },
    {
      path: '/menu/facmenu/facplaceFirst',
      name: 'FacplaceFirst',
      component: FacplaceFirst
    },
    {
      path: '/menu/facmenu/factimeFirst',
      name: 'FactimeFirst',
      component: FactimeFirst
    },
    {
      path: '/menu/faclist/:name',
      name: 'Facselect',
      component: Facselect
    },
    {
      path: '/menu/faclist/:name/:where',
      name: 'FacInfo',
      component: FacInfo
    }
]