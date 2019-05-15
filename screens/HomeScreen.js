import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  WebView,
  ImageBackground,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
    headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Color_icon_blue_v2.svg/300px-Color_icon_blue_v2.svg.png' }}
      // source={ require('./assets/img/basketball-cover.jpg')}
      />
    ),
    headerTitleStyle: { color: 'white', fontFamily: 'Roboto_Thin', fontWeight: "200" },

  };

  constructor(props) {
    super(props)
    this.state = {
        isLoading: true,
        dataSource: null,
        gpsReady: true,
        gpsError: null,
        where: { lat: null, lng: null },
        gps: null


    }
}

renderHeader() {

  let text = 'Waiting..';
  if (this.state.errorMessage) {
      text = this.state.errorMessage;
  } else if (this.state.gpsReady) {
      text = JSON.stringify(this.state.where);

  }


  return (

      < View style={styles.header}>

          < View style={styles.horizitem}>
              < View style={styles.horiziteminner}>
                  <Text>{text}</Text>
              </View>
          </View>

          < View style={styles.horizitem}>
              < View style={styles.horiziteminner}>
                  <Text>{text}</Text>
              </View>
          </View>

          < View style={styles.horizitem}>
              < TouchableOpacity
                  disabled={!this.state.gpsReady}
                  onPress={() => this.props.navigation.navigate('InstagramLoginPage')}
              >
                  <Image
                      source={require('../assets/images/icon.png')}
                      style={{ width: '100%', height: '100%', opacity: .6, borderColor: "#fff", borderWidth: 3 }}

                  />
              </TouchableOpacity>
          </View>
      </View>
  )
}


  render() {
    return (
      <ImageBackground source={require('../assets/images/grafiti.jpg')} style={styles.container}>
      {this.renderHeader()}
      < View style={styles.header}>

          < View style={styles.horizitem}>
              <Button
                  title="I am on Court"
                  style={[styles.customBtnStyle, { backgroundColor: "#2BC5E7",opacity: .9 }]}
                  //example of passing properties to the other view
                  onPress={() => this.props.navigation.navigate('HomeScreen1',{ "location":{lat:45,lon:15} })}  >
                  <Ionicons name="md-pin" size={25} color="white" />
                  
              </Button>
          </View>
          < View style={styles.horizitem}>
              <Button
                title="I will come later"
                  style={[styles.customBtnStyle, { backgroundColor: "#D84616",opacity: .9 }]}
                  onPress={() => this.props.navigation.navigate('Details')}>
                  <Ionicons name="md-time" size={25} color="white" />
                  
              </Button>
          </View>
          < View style={styles.horizitem}>
              <Button
                title="Who plays?"
                  style={[styles.customBtnStyle, { backgroundColor: "#FCB543",opacity: .9 }]}
                  onPress={() => this.props.navigation.navigate('InstagramLoginPage')}>
                  <Ionicons name="md-basketball" size={25} color="white" />
                  
              </Button>
          </View>

           < View style={styles.horizitem}>
      < TouchableOpacity
          disabled={!this.state.gpsReady}
          onPress={() => this.props.navigation.navigate('InstagramLoginPage')}
      >
          <Image
              source={require('../assets/images/icon-basket.png')}
              style={{ width: '100%', height: '100%', opacity: .8, borderColor: "#fff", borderWidth: 0.7,backgroundColor: "#FCB543"}}

          />
      </TouchableOpacity>
  </View>

          


      </View>




      {this.state.gpsReady ? (

          <View style={styles.bottom}>
              <WebView geolocationEnabled={true}
                  javaScriptEnabled={true}
                  source={{ uri: 'https://www.markwebkitchen.com/hakl' }}
                  />

              
          </View>
      ) : (
              <View style={styles.bottom}>
                  <ImageBackground
                      source={require('../assets/images/loading.gif')}
                      style={{ width: '100%', height: '100%', opacity: 0.99, borderColor: "#fff", borderWidth: 3 }}

                  >

                      <Text>Loading Map GPS</Text>

                  </ImageBackground>

              </View>
          )

      }



  </ImageBackground>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      
      // alignSelf: 'stretch',
      // textAlign: 'center',

  },
  header: {
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
        backgroundColor: 'rgba(45,63,218,.4)',
      flexDirection: 'row',
      flexWrap: 'wrap'

      // width:1000

  },
  map: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      //  width: '100%', height: 150
      //  backgroundColor: 'skyblue'
  },
  bottom: {
      flex: 0.5,
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'steelblue'
  },
  horizitem: {
      width: '30%',
      height: '50%',
      padding: 5,
      justifyContent: 'center',
      textAlign: 'center',
  },
  horiziteminner: {
      flex: 1,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      textAlign: 'center',

  },
  customBtnStyle: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      textAlign: 'center',
      borderColor: "#fff", 
      borderWidth: .7

  },


});
