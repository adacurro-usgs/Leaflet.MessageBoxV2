# Leaflet.MessageBoxV2
Inspired by https://github.com/tinuzz/leaflet-messagebox 

Leaflet.MessageboxV2 is a simple control inspired by https://github.com/tinuzz/leaflet-messagebox. It does the same thing but with added functionality like defining your own class and making the message box permanent.

According to the original author @tinuzz

There are two ways to define the message box

    var options = { timeout: 5000 }
    var box = L.control.messagebox(options).addTo(map);
    
and 
    
    var map = L.map( 'mapdiv', {'messagebox': true, ...} );
    map.messagebox.options.timeout = 5000;
  
To show the message:

    box.show( 'This is the message' );

or, when implicitly used with the map:

    map.messagebox.show( 'This is the message' );
    
    
# Added options are 

`SetClass:` (string) you can define your class without altering your CSS code. It also work if you are using custom frameworks such as Bootstrap.

`timeout:` (int) you can now disable the timeout (disappearing messagebox) by setting the value to 0. This will make the message box permanent.


Please refer to @ https://github.com/tinuzz/leaflet-messagebox  for more information

