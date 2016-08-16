# ModifyTree
Modify DOM elements. 

Wrap the items with a class in tag. 

## Example:

```html
<div id="events-list">
  <h2>Header</h2>
  <div class="event">...</div>
  <div class="event">...</div>
  <h2>Header</h2>
  <div class="event">...</div>
  <div class="event">...</div>
  <div class="event">...</div>
  ...
</div>

<script>
    new ModifyTree({
        container : document.getElementById('events-list'),
        itemClass : 'event',
        blockTag  : 'section',
        blockClass: 'events-block'
    });
</script>
```
### Result: 
```html
<div id="events-list">
  <h2>Header</h2>
  <section class="events-block">
    <div class="event">...</div>
    <div class="event">...</div>
  </section>  
  <h2>Header</h2>
  <section class="events-block">
    <div class="event">...</div>
    <div class="event">...</div>
    <div class="event">...</div>
  </div>  
  ...
</div>
```
