import { useContext, useEffect, useState, useRef } from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { Resource } from '../components/Resource';
import { Main } from '../components/Main';

const templateAreas = `"header header header"
"sidebar resource main"
"footer footer footer"`;

const gridTemplateRows = '50px 1fr 25px';
const gridTemplateColumns = '50px 250px 1fr';

export const Home = () => {
  return (
    <Grid
      templateAreas={templateAreas}
      gridTemplateRows={gridTemplateRows}
      gridTemplateColumns={gridTemplateColumns}
      h="100vh"
      overflow="hidden"
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <GridItem area="sidebar" overflow="scroll">
        <Sidebar />
      </GridItem>
      <GridItem area="resource" overflow="scroll">
        <Resource />
      </GridItem>
      <GridItem area="main">
        <Main />
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
};
