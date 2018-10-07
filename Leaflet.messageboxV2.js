/* message box leaflet plugin  @https://github.com/tinuzz/leaflet-messagebox*/
/* modified by Alex Dacurro  Github @ adacurro-usgs */
L.Control.Messagebox = L.Control.extend({
    options: {
        position: 'topright',
        timeout: 0,
        setClass: ''
    },

    onAdd: function(map) {
        // add custom class on the messagebox. (you can add bootstrap class if you want) 
        this._container = L.DomUtil.create('div', 'leaflet-control-messagebox ' + this.options.setClass);
        //L.DomEvent.disableClickPropagation(this._container);
        return this._container;
    },

    show: function(message, timeout) {
        var elem = this._container;

        elem.innerHTML = message;
        elem.style.display = 'block';


        timeout = timeout || this.options.timeout;
        /* if you want a permanent message box like me */
        if (timeout > 0) {
            if (typeof this.timeoutID == 'number') {
                clearTimeout(this.timeoutID);
            }
            this.timeoutID = setTimeout(function() {
                elem.style.display = 'none';
            }, timeout);
        }

    },
    hide: function() {

        var elem = this._container;
        elem.style.display = 'none';

    }
});



L.Map.mergeOptions({
    messagebox: false
});

L.Map.addInitHook(function() {
    if (this.options.messagebox) {
        this.messagebox = new L.Control.Messagebox();
        this.addControl(new this.messagebox);
    }
});

L.control.messagebox = function(options) {
    return new L.Control.Messagebox(options);
};
