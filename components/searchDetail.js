import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class SearchDetail extends Component {
  render() {
    let item = this.props.property
    let stats = `${item.bedroom_number} beds,  ${item.property_type}`
    if(item.bathroom_number) {
      stats += `, ${item.bathroom_number} ${(item.bathroom_number > 1)?'bathrooms':'bathroom'}`
    }
    let price = item.price_formatted

    return (
      <View style={styles.container}>
       <Image style={styles.image}
           source={{uri: item.img_url}} />
       <View style={styles.heading}>
         <Text style={styles.price}>{price}</Text>
         <Text style={styles.title}>{item.title}</Text>
         <View style={styles.separator}/>
       </View>
       <Text style={styles.description}>{stats}</Text>
       <Text style={styles.description}>{item.summary}</Text>
     </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});
