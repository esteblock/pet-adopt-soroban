# Chapter 2. Connect to your wallet

We will use the @soroban-react packages to connect your ReactJS dapp to your wallet.
We will use the Freighter wallet

## 2.1 Install packages
```
yarn add @soroban-react/core
yarn add @soroban-react/types
yarn add @soroban-react/wallet-data
yarn add @soroban-react/chains
```

# 2.2 Create a sorbanReact provider component


1. Create a folder in `src/soroban`
1. Create a new file in `src/soroban/MySorobanReactProvider.tsx`
1. Paste:

```javascript
import React from 'react'
import {SorobanReactProvider} from '@soroban-react/core';
// eslint-disable-next-line
import {chains} from '@soroban-react/chains';
import {ChainMetadata, ConnectorList} from "@soroban-react/types";
import { freighter } from '@soroban-react/freighter';

 
  const appName = "Pet Adopt Dapp"
  const allowedConnectorName = "My Allowed Connectors for Pet Adopt Dapp"
  const allowedChains: ChainMetadata[] = [chains.sandbox, chains.standalone, chains.futurenet];

  const allowedConnectors: ConnectorList = [
      {
        groupName: allowedConnectorName,
        connectors: [freighter({ appName, chains:allowedChains })],
      },
    ];

  export default function MySorobanReactProvider({children}:{children: React.ReactNode}) {
    return (
      <SorobanReactProvider
        chains={allowedChains}
        connectors={allowedConnectors}>
          {children}
      </SorobanReactProvider>
    )
  } 
```

## 2.3 Place your @soroban-react provider at the root of your dApp
1. Edit `pages/index.tsx`
2. Import your @soroban-react provider. 
```javascript
import MySorobanReactProvider from './soroban/MySorobanReactProvider';
```
and change:
```javascript
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ButtonAppBar/>
        <DogGrid/>
    </>
  )
```


for:
```javascript
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MySorobanReactProvider>
        <ButtonAppBar/>
        <DogGrid/>
      </MySorobanReactProvider>
    </>
  )
```

## 2.4 Add a wallet-data in button nav bar
Now we are able to connect with the wallet, but we are not doing nothing with it.
We will use the yarn add @soroban-react/wallet-data package to show our wallet data and help us with a Connect Wallet button

change
``` javascript
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Adopt Dapp in Soroban
          </Typography>
          <Button color="inherit">Connect Wallet</Button>
        </Toolbar>
      </AppBar>
  
  );
}

```

```javascript
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import {WalletData} from '@soroban-react/wallet-data'
import { useSorobanReact } from '@soroban-react/core'

export default function ButtonAppBar() {
  const sorobanContext=useSorobanReact()
  return (

      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Adopt Dapp in Soroban
          </Typography>
          <WalletData sorobanContext={sorobanContext} />
        </Toolbar>
      </AppBar>
  
  );
}

```

## Should look like this
When you dont have your wallet connected, should propose to connect your wallet:

![Without wallet](./img/without-wallet.png "Without wallet")

When you have your wallet connected, should show your address and network

![With wallet](./img/with-wallet.png "With wallet")
## 2.5 Check your code!
Your code should look like this:
https://github.com/esteblock/pet-adopt-soroban/tree/final-chapter2