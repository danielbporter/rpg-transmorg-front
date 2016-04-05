import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { List, Map } from 'immutable';

/*

genre: multi-select
type: select
subtype: select
    dependent on type
name: text
slug: text
description: textarea
source: text
tags: multi-select
mood: multi-select
rarity: select
stats: boolean
attachments: ?

*/

function mapStateToProps(state) {
  console.log('mappingStateToProps');
  console.log(state);
  return {
    genreOptions: state.assetForm.get('genreOptions').toJS(),
    typeOptions: state.assetForm.get('typeOptions').toJS(),
    subtypeOptions: state.assetForm.get('subtypeOptions').toJS(),
    tagOptions: state.assetForm.get('tagOptions').toJS(),
    moodOptions: state.assetForm.get('moodOptions').toJS(),
    rarityOptions: state.assetForm.get('rarityOptions').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}


class AssetForm extends Component {

  handleSubmit(e) {
    // make a json object of the thing and log/return it
    console.log('submitted!');
    console.log(e.toString());
  }

  renderTextField(label, object) {
    return (
      <div>
        <label>{label}: </label>
        <input type="text" {...object} />
      </div>
    );
  }

  renderSelect(name, label, formObject, options) {
    console.log(options);
    return (
      <div>
        {label}:
        <Select
          value=""
          options={options}
          {...formObject}
        />
      </div>
    );
  }

  render() {
    const { fields } = this.props;
    // console.log(fields);
    const genreOptions = this.props.genreOptions;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderSelect('genre', 'Genre', fields.genre, genreOptions)}
        {this.renderTextField('Type', fields.type)}
        {this.renderTextField('Subtype', fields.subtype)}
        {this.renderTextField('Name', fields.name)}
        {this.renderTextField('Slug', fields.slug)}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AssetForm.propTypes = {
  fields: PropTypes.object.isRequired,
  genreOptions: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(reduxForm({
    form: 'asset',
    fields: ['genre', 'type', 'subtype', 'name', 'slug',
             'description', 'source', 'tags', 'mood', 'rarity', 'stats'],
  })(AssetForm));

