```
yarn add @soroban-react/core
yarn add @soroban-react/types
yarn add @soroban-react/wallet-data
yarn add @soroban-react/chains
```

# Choose what connectors you want.
For the moment, the only connector available is the Freighter wallet, so creating a AllowedConnectors object will be very easy
1. Create a folder in `src/soroban`
1. Create a new file in `src/soroban/allowedConnectors.tsx`
1. Paste:

```javascript
import {ConnectorList } from '@soroban-react/types';
import { freighter } from '@soroban-react/freighter';
import { chains } from '@soroban-react/chains';

const appName = "Pet Adopt Dapp"
export const allowedConnectors: ConnectorList = [
    {
      groupName: 'My Connectors Group Name',
      connectors: [freighter({ appName, chains })],
    },
  ];
```

# Create a @soroban-react provider component
1. Create a new file in `src/soroban/MySorobanReactProvider.tsx`
1. Paste

```javascript
import React from 'react'
import {SorobanReactProvider} from '@soroban-react/core';
import {chains } from '@soroban-react/chains';
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

# Place your @soroban-react provider at the root of your dApp
1. Edit `src/App,tsx`
2. Import your @soroban-react provider. Change
```javascript
import React from 'react';
import DogGrid from './components/DogGrid';
import ButtonAppBar from './components/ButtonAppBar';

```

for

```javascript
import React from 'react';
import DogGrid from './components/DogGrid';
import ButtonAppBar from './components/ButtonAppBar';
import MySorobanReactProvider from './soroban/MySorobanReactProvider';
```

3. Add the soroban react provider
change
```javascript
import React from 'react';
import DogGrid from './components/DogGrid';
import ButtonAppBar from './components/ButtonAppBar';
import MySorobanReactProvider from './soroban/MySorobanReactProvider';
function App() {
  return (
    <div>
      <MySorobanReactProvider>
        <ButtonAppBar/>
        <DogGrid/>
      </MySorobanReactProvider>
    </div>
  );
}

export default App;

```


# Add a wallet-data in buttn nav bar
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