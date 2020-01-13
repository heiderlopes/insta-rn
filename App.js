/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  AppState
} from 'react-native';

import List from './src/components/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feeds: this.loadFeeds()
    };

  };

  loadFeeds() {
    return this.initialFeeds();
  }

  initialFeeds() {
    return [
      {
        id: 1,
        nome: "Heider Lopes",
        descricao: "Mais um dia de muitos bugs",
        imgPerfil: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/64816245_2139755906123817_7043005968912744448_o.jpg?_nc_cat=109&_nc_ohc=5TFRF8vjsecAQmj6PXFaVzqFQ7s_d3hmhSGtGcP8Y8mflUoDvcEmT70tw&_nc_ht=scontent.fcgh7-1.fna&oh=09a806a1942452871f6e1614aab8bfcd&oe=5E8E9AD5",
        imgPublicacao: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/65531323_2157032947729446_7341039380284309504_o.jpg?_nc_cat=106&_nc_ohc=jo8Q6lbZDnUAQnd51KFK6GHNGG6aRDxMJeJNEd1yGBUS07WvJR6ib3NXg&_nc_ht=scontent.fcgh7-1.fna&oh=78239aa5ccce34f669ba5745972c423b&oe=5E8DF9D6",
        likeada: true,
        likers: 10
      },
      {
        id: 2,
        nome: "Heider Lopes",
        descricao: "Mais um dia de muitos bugs",
        imgPerfil: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/64816245_2139755906123817_7043005968912744448_o.jpg?_nc_cat=109&_nc_ohc=5TFRF8vjsecAQmj6PXFaVzqFQ7s_d3hmhSGtGcP8Y8mflUoDvcEmT70tw&_nc_ht=scontent.fcgh7-1.fna&oh=09a806a1942452871f6e1614aab8bfcd&oe=5E8E9AD5",
        imgPublicacao: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/65531323_2157032947729446_7341039380284309504_o.jpg?_nc_cat=106&_nc_ohc=jo8Q6lbZDnUAQnd51KFK6GHNGG6aRDxMJeJNEd1yGBUS07WvJR6ib3NXg&_nc_ht=scontent.fcgh7-1.fna&oh=78239aa5ccce34f669ba5745972c423b&oe=5E8DF9D6",
        likeada: false,
        likers: 1
      },
      {
        id: 3,
        nome: "Heider Lopes",
        descricao: "Mais um dia de muitos bugs",
        imgPerfil: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/64816245_2139755906123817_7043005968912744448_o.jpg?_nc_cat=109&_nc_ohc=5TFRF8vjsecAQmj6PXFaVzqFQ7s_d3hmhSGtGcP8Y8mflUoDvcEmT70tw&_nc_ht=scontent.fcgh7-1.fna&oh=09a806a1942452871f6e1614aab8bfcd&oe=5E8E9AD5",
        imgPublicacao: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/65531323_2157032947729446_7341039380284309504_o.jpg?_nc_cat=106&_nc_ohc=jo8Q6lbZDnUAQnd51KFK6GHNGG6aRDxMJeJNEd1yGBUS07WvJR6ib3NXg&_nc_ht=scontent.fcgh7-1.fna&oh=78239aa5ccce34f669ba5745972c423b&oe=5E8DF9D6",
        likeada: false,
        likers: 0
      },
      {
        id: 4,
        nome: "Heider Lopes",
        descricao: "Mais um dia de muitos bugs",
        imgPerfil: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/64816245_2139755906123817_7043005968912744448_o.jpg?_nc_cat=109&_nc_ohc=5TFRF8vjsecAQmj6PXFaVzqFQ7s_d3hmhSGtGcP8Y8mflUoDvcEmT70tw&_nc_ht=scontent.fcgh7-1.fna&oh=09a806a1942452871f6e1614aab8bfcd&oe=5E8E9AD5",
        imgPublicacao: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/65531323_2157032947729446_7341039380284309504_o.jpg?_nc_cat=106&_nc_ohc=jo8Q6lbZDnUAQnd51KFK6GHNGG6aRDxMJeJNEd1yGBUS07WvJR6ib3NXg&_nc_ht=scontent.fcgh7-1.fna&oh=78239aa5ccce34f669ba5745972c423b&oe=5E8DF9D6",
        likeada: false,
        likers: 0
      }
    ];
  }

  //Chamado quando o componente é montado na tela
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    console.log('Entrando');
    //console.log(this.state.feeds);
    //this._recoverData();
  }

  componentWillUnmount() {
    console.log('Saindo');
    AppState.removeEventListener('change', this._handleAppStateChange);
    //console.log(this.state.feeds);
  }

  _handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'background' || nextAppState === 'inactive') {
          //this._storeData('dataToSave');
      }
  };
  
  render() {
    return (
      
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          <View style={styles.header}>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/logo.png')}
                style={styles.logo}/>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Image
                source={require('./src/assets/send.png')}
                style={styles.send}/>
            </TouchableOpacity>
            
          </View>

          <FlatList
            style={styles.list}
            keyExtractor = { (item, index) => item.id.toString }
            showsVerticalScrollIndicator={false}
            data={this.state.feeds}
            renderItem={ ({item}) => <List data={item} /> }/>        
        </View>
        </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  safeArea: {
    flex : 1
  },
  container: {
    flex : 1
  },
  list: {
    
  },
  header: {
    height: 55, 
    flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  }
});

export default App;
