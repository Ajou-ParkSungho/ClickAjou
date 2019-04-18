
import Librarymenu from '../view/library/librarymenu'
import Libraryfloor from '../view/library/libraryfloor'
import Librarysection from '../view/library/librarysection'

export default [
    {
      path: '/menu/librarymenu',
      name: 'Librarymenu',
      component: Librarymenu
    },
    {
      path: '/menu/libraryfloor',
      name: 'Libraryfloor',
      component: Libraryfloor
    },
    {
      path: '/menu/libraryfloor/:floor',
      name: 'Librarysection',
      component: Librarysection
    }
]