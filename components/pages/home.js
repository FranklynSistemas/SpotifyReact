/**
 * Created by miguhruiz on 25/12/16.
 */
import React from 'react';
import Material from 'material-ui/styles/MuiThemeProvider';
import Head from 'next/head';
import Paper from 'material-ui/Paper/';

import SearchBox from '../SearchBox';
import Header from '../Header';

const styles = {
  center: {
    textAlign: 'center',
  },
};

function HomePage() {
  return (
    <Material>
      <div className="app">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no,
            initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <title>Spotify React</title>
        </Head>
        <Header />
        <Paper className="Home" zDepth="3">
          <h1 style={styles.center}>¡Bienvenido a <b>SpotifyReact</b>!</h1>
          <h2 style={styles.center}>¿Sobre qué álbum o artista te gustaría aprender hoy?</h2>
          <SearchBox />
        </Paper>
      </div>
    </Material>
  );
}


export default HomePage;
