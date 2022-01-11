import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const definePin7URL =
  'GİZLİ';

const openLedURL =
  'GİZLİ';

const closeLedURL =
  'GİZLİ';

function dashboard() {
  const [isClickedData, setIsClickedData] = useState(false);

  const [definePinData, setDefinePinData] = useState([]);
  const [openLedData, setOpenLedData] = useState([]);
  const [closeLedData, setCloseLedData] = useState([]);

  function changeClicketData(value) {
    setIsClickedData(value);
  }

  async function startApp() {
    axios.get(definePin7URL).then(response => {
      setLoading(false);
      setDefinePinData(response);
      console.log(definePinData?.status);
    });
  }

  function openLedFunction() {
    axios.get(openLedURL)
      .then(response => {
        setOpenLedData(response);
        console.log(response.status);
      })
      .catch(response => {
        setOpenLedData(response);
        console.log(response.status);
      });
  }

  function closeLedFunction() {
    axios.get(closeLedURL)
      .then(response => {
        setCloseLedData(response);
        console.log(response.status);
      })
      .catch(response => {
        setCloseLedData(response);
        console.log(response.status);
      });
  }

  useEffect(() => {
    startApp();
  }, []);

  return (
    <View
      style={[
        styles.container,
        isClickedData ? styles.changeOpen : styles.changeClose,
      ]}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
          flex: 0.3,
        }}>
        {isClickedData ? (
          <>
            <TouchableOpacity onPress={openLedFunction()}>
              <Image
                source={require('../../public/openLamp.png')}
                style={{
                  width: 250,
                  height: 250,
                  marginBottom: 10,
                  resizeMode: 'contain',
                  marginTop: -8,
                }}
              />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={closeLedFunction()}>
              <Image
                source={require('../../public/closeLamp.png')}
                style={{
                  width: 240,
                  height: 240,
                  marginBottom: 10,
                  resizeMode: 'contain',
                  marginTop: -9,
                }}
              />
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={{marginTop: '40%', padding: 20}}>
        {isClickedData ? (
          <View
            style={{
              backgroundColor: '#222e37',
              padding: 8,
              borderRadius: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                color: '#fec854',
              }}>
              Lamba Açıldı!
            </Text>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                color: '#222e37',
              }}>
              Lamba Kapandı!
            </Text>
          </View>
        )}
      </View>

      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => setIsClickedData(!isClickedData)}>
          <View
            style={{
              backgroundColor: 'lightgray',
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              elevation: 15,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 100,
                padding: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://image.flaticon.com/icons/png/512/25/25706.png',
                }}
                style={[
                  styles.image,
                  isClickedData ? styles.tintOpen : styles.tintClose,
                ]}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  changeOpen: {
    backgroundColor: '#fec854',
  },
  changeClose: {
    backgroundColor: '#222e37',
  },
  tintOpen: {
    tintColor: '#fec854',
  },
  tintClose: {
    tintColor: '#222e37',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default dashboard;