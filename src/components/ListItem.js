import React, { Component} from 'react';
import { Text,View,TouchableWithoutFeedback,LayoutAnimation,UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{
  componentWillUpdate(){
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }
  // Helper function
  // Displays the description, based on the expand object returned from mapStateToProps
  renderDescription(){
    const { library, expanded } = this.props;
    if(expanded) {
      return(
        <CardSection>
          <Text style={{ flex:1 }}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    // destructuring
    const { textStyle } = styles;
    const { id, title } = this.props.library;

    return(
      <TouchableWithoutFeedback
        onPress={ () => this.props.selectLibrary(id) }
      >
        <View>
          <CardSection>
            <Text style={textStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// Styling
const styles={
  textStyle:{
    fontSize: 25,
    paddingLeft: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
// mapStateToProps must always return an object
  return { expanded : expanded };
};

// actions and states are sent to the component using connect
export default connect(mapStateToProps,actions)(ListItem);
