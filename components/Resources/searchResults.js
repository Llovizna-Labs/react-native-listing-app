
import React, {
  Component,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Image
} from 'react-native';


export default class SearchResults extends Component {
  constructor() {
    super(props)
    let dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => this.props.listings.indexOf(r1) !==  this.props.listings.indexOf(r2)}
    )

    this.state = {
      dataSource : dataSource.cloneWithRows(this.props.listings)
    }
  }

  renderRow (rowData, sectionID, rowID) {
    <TouchableHighlight
      underlayColor: '#dddddd'
      <View>
      <Text> {rowData.title} </Text>
      </View>
      </TouchableHighlight>
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    )
  }
}
