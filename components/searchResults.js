
import React, {
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


import SearchDetail from './searchDetail'

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
    let dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => this.props.listings.indexOf(r1) !==  this.props.listings.indexOf(r2)}
    )

    this.state = {
      dataSource : dataSource.cloneWithRows(this.props.listings)
    }


  }

  rowPressed(index) {
    let property = this.props.listings[index]
    this.props.navigator.push({
      title: 'Item Detail',
      component: SearchDetail,
      passProps: {property: property}
    })
  }

  renderRow (rowData, sectionID, rowID) {
    let price = rowData.price_formatted.split(' ')[0]

    return (
      <TouchableHighlight
        underlayColor='#dddddd'
        onPress={() => this.rowPressed(rowID)}
        >
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: rowData.img_url}} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price} </Text>
              <Text style={styles.title} numberOfLines={1}> {rowData.title} </Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
        </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    )
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
})
