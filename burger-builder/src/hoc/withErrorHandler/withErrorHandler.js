import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    // class factory
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {
              axios.interceptors.request.use(null, req => {
                  this.setState({error: null});
                  return req;
              });
              axios.interceptors.response.use(res => res, error => {
                  this.setState({error: error});
              });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;
