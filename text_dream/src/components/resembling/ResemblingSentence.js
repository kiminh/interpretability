import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import {Grid, Typography} from '@material-ui/core';

/**
 * Provides a component for displaying sentences in other Components.
 */
class ResemblingSentence extends React.Component {
  /**
   * Renders a component to display sentences in other components.
   *
   * @return {jsx} the component to be rendered.
   */
  render() {
    const words = this.props.sentence.slice(1, -1);
    const colors = [];

    for (const i in words) {
      if (words[i] === this.props.target[parseInt(i) + 1]) {
        colors.push(this.props.colors[0]);
      } else if (words[i] === this.props.original[parseInt(i) + 1]) {
        colors.push(this.props.colors[1]);
      } else {
        colors.push(this.props.colors[2]);
      }
    }

    return (
      <Grid container direction='row' spacing={1} className='mainGrid'>
        {words.map((word, index) =>
          <Grid item key={index}>
            <Typography variant="body2" style={{color: colors[index]}}>
              {word}
            </Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

ResemblingSentence.propTypes = {
  sentence: PropTypes.array.isRequired,
  target: PropTypes.array.isRequired,
  original: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

/**
 * Mapping the state that this component needs to its props.
 *
 * @param {object} state - the application state from where to get needed props.
 * @param {object} ownProps - optional own properties needed to acess state.
 * @return {object} the props for this component.
 */
function mapStateToProps(state, ownProps) {
  return {
  };
}

/**
 * Mapping the actions of redux to this component.
 *
 * @param {function} dispatch - called whenever an action is to be dispatched.
 * @return {object} all the actions bound to this component.
 */
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ResemblingSentence);
