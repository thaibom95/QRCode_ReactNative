/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { QRScannerView } from 'ac-qrcode';
import Toast from 'react-native-simple-toast';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      < QRScannerView
        onScanResultReceived={this.barcodeReceived.bind(this)}

        renderTopBarView={() => this._renderTitleBar()}

        renderBottomMenuView={() => this._renderMenu()}
      />
    );
  }

  _renderTitleBar() {
    return (
      <Text
        style={{ color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12 }}
      >Here is title bar</Text>
    );
  }

  _renderMenu() {
    return (
      <Text
        style={{ color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12 }}
      >Here is bottom menu</Text>
    )
  }

  barcodeReceived(e) {
    Toast.show('Type: ' + e.type + '\nData: ' + e.data);
    //console.log(e)
  }
}

