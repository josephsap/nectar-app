import React from 'react';
import { withNextApollo } from '@gloojs/next-apollo';
import _compose from 'lodash/fp/compose';
import App, { Container } from 'next/app';
import Head from 'next/head';
import initApollo from '../lib/apollo/initApollo';
import '@gloojs/semantic-ui-theme/dist/semantic.css';

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, ...other } = this.props;
    return (
      <Container>
        <Head>
          <title>Crypto</title>
        </Head>
        <Component {...pageProps} {...other} />
      </Container>
    );
  }
}

export default _compose(
  withNextApollo(initApollo),
)(NextApp);
