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