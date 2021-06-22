import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as StoreProvider } from 'react-redux';

import { Ionicons } from '@expo/vector-icons'

import './src/utils/firebase'
import store from './src/services/store'
import Carrinho from './src/views/Carrinho'
import Pedidos from './src/views/Pedidos'
import Homepage from './src/views/Homepage'
import Login from './src/views/Login'
import CadastroUsuario from './src/views/CadastroUsuario'
import FAQ from './src/views/FAQ'
import Sobre from './src/views/Sobre'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer'])

const Drawer = createDrawerNavigator();
function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Homepage"
      drawerContentOptions={{
        activeBackgroundColor: '#0068ff',
        activeTintColor: '#FFF',
        marginTop: 16,
        labelStyle: {
          fontSize: 16
        }
      }}
    >
      <Drawer.Screen
        name="Homepage"
        component={Homepage}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={(focused) ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          title: 'Ver carrinho',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={(focused) ? 'cart' : 'cart-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: 'Pedidos registrados',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={(focused) ? 'list' : 'list-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Faq"
        component={FAQ}
        options={{
          title: 'FAQ',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={(focused) ? 'help-circle' : 'help-circle-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={(focused) ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={size}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="CadastroUsuario"
            component={CadastroUsuario}
          />
          <Stack.Screen
            name="AppDrawer"
            component={AppDrawer}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}