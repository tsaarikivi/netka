import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import Cart from './components/cart'
import Layout from './components/layout'
import ShopItem from './components/shopItem'
import Shop from './components/shop'
import User from './components/user'
import NotFound from './components/notFound'

export default (
    <Route path="/" component={Layout}>
        <IndexRedirect to="/shop" />
        <Route path="/cart" component={Cart} />
        <Route path="/shopitem/:shopitemId" component={ShopItem} />
        <Route path="/shop" component={Shop} />
        <Route path="/user" component={User} />
        <Route path="*" component={NotFound} />
    </Route>
)