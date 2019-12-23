import * as React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

const mapStateToProps = () => {
  return {};
};

const mapActionToProps = {};

@translate()
@connect(
  mapStateToProps,
  mapActionToProps
)
export default class I18nPage extends React.Component<any, any> {
  changeLanguage = lang => {
    this.props.i18n.changeLanguage(lang);
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <h2>{t('hello')}</h2>
        <button onClick={() => this.changeLanguage('zh')}>zh</button>
        <button onClick={() => this.changeLanguage('en')}>en</button>
      </div>
    );
  }
}
