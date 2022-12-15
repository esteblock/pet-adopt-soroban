#Chapter 3. Write the blockchain when adopting a pet.


Currently we have a button that does not do anything:

```
<Button size="small" variant="contained">
            Adopt it now! ❤️
        </Button>

```

Let's create a function component with a function that will interact with the blockchain

```
 <Button size="small" variant="contained" onClick={()=>{ 
          adoptPet({
            id: id,
            sorobanContext: sorobanContext
          })}}>
            Adopt it now! ❤️
        </Button>
```

fund your wallet that use in browser:

http://localhost:8000/friendbot?addr=GDT2NORMZF6S2T4PT4OBJJ43OPD3GPRNTJG3WVVFB356TUHWZQMU6C3U

