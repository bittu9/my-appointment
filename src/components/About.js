'use strict';
import React, {Component,PropTypes} from 'react';
import PageViewer from './PageViewer';
import {Actions } from 'react-native-router-flux';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

export default class About extends Component {

  render() {
    return (
      <PageViewer
        title="About"
        headerImage={require('./../assets/img/info-background.png')}
      >
        <View style={styles.container}>
          <Text>about us about us about us</Text>
        </View>
      </PageViewer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10
  },

});