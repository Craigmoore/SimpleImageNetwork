// Simple image network
(function( $ ) {

$.widget( "ui.simpleimagenetwork", {
	options: {
		centerURL : '',
		upURL : '',
		rightURL : '',
		downURL : '',
		leftURL : '',
		hoverText : '',
		centerData : undefined,
		upData : undefined,
		rightData : undefined,
		downData : undefined,
		leftData : undefined,
		signup : undefined,
		centerImage : undefined,
		upImage : undefined,		
		rightImage : undefined,
		downImage : undefined,
		leftImage : undefined,
		defaultLinkURL : 'http://www.flashygraphics.co.uk',
		defaultImageURL : 'images/redc.png'		
	},
	_create: function() {
		var that = this;
				
		this.upRowDiv = $("<div class='uprow'></div>").appendTo( this.element );
			$("<img src='" + this.options.defaultImageURL + "' />").appendTo($("<div class='leftcol'></div>")).appendTo( this.upRowDiv );
			this.upDiv = $("<div class='midcol' id='up'></div>").appendTo( this.upRowDiv );
			this.options.upImage = $("<img src='" + this.options.defaultImageURL + "' />");
			this.options.upImage.appendTo(this.upDiv);
			this.options.upImage[0].onclick = function() {
				that._setOption('centerData', that.options.upData);
			};
			$("<img src='" + this.options.defaultImageURL + "' />").appendTo($("<div class='rightcol'></div>")).appendTo( this.upRowDiv );
			
		this.midRowDiv = $("<div class='midrow'></div>").appendTo( this.element );
			this.leftDiv = $("<div class='leftcol' id='left'></div>").appendTo( this.midRowDiv );
			this.options.leftImage = $("<img src='" + this.options.defaultImageURL + "' />");
			this.options.leftImage.appendTo( this.leftDiv );
			this.options.leftImage[0].onclick = function() {
				that._setOption('centerData', that.options.leftData);
			}
			this.imageDiv = $("<div class='midcol' id='image'></div>").appendTo( this.midRowDiv );
			this.options.centerLink = $("<a></a>");
			this.options.centerLink[0].href=this.options.defaultLinkURL;
			this.options.centerLink.appendTo( this.imageDiv );
			this.options.centerImage = $("<img src='" + this.options.defaultImageURL + "' />");
			this.options.centerImage.appendTo( this.options.centerLink );
			this.rightDiv = $("<div class='rightcol' id='right'></div>").appendTo( this.midRowDiv );
			this.options.rightImage = $("<img src='" + this.options.defaultImageURL + "' />");
			this.options.rightImage.appendTo( this.rightDiv );
			this.options.rightImage[0].onclick = function() {
				that._setOption('centerData', that.options.rightData);
			};

		this.downRowDiv = $("<div class='downrow'></div>").appendTo( this.element );
			$("<img src='" + this.options.defaultImageURL + "' />").appendTo($("<div class='leftcol'></div>")).appendTo( this.downRowDiv );
			this.downDiv = $("<div class='midcol' id='down'></div>").appendTo( this.downRowDiv );
			this.options.downImage = $("<img src='" + this.options.defaultImageURL + "' />");
			this.options.downImage.appendTo( this.downDiv );
			this.options.downImage[0].onclick = function() {
				that._setOption('centerData', that.options.downData);
			};
			$("<img src='" + this.options.defaultImageURL + "' />").appendTo($("<div class='rightcol'></div>")).appendTo( this.downRowDiv );
	},
	destroy: function() {
		
		this.upRowDiv.remove();
		this.midRowDiv.remove();
		this.downRowDiv.remove();

		$.Widget.prototype.destroy.apply( this, arguments );
	},
	_setOption: function( key, value ) {
		var that = this;
		var resolved = true;
		switch ( key ) {
			case "centerURL" :
				this.options.centerURL = value;
				$.getJSON(this.options.centerURL, function(data){
					that._setOption('centerData', data);
				});
				break;
			case "centerData" :
				//console.log(value);
				this.options.centerData = value;
				this._setOption('upURL', this.options.centerData[0]);
				this._setOption('rightURL', this.options.centerData[1]);
				this._setOption('downURL', this.options.centerData[2]);
				this._setOption('leftURL', this.options.centerData[3]);
				this._setOption('centerImage', this.options.centerData[4]);
				this._setOption('centerLink', this.options.centerData[5]);
				this._setOption('hoverText', this.options.centerData[6]);
				break;
			case "centerImage" :
				this.options.centerImage[0].src = value;
				break;
			case "centerLink" :
				this.options.centerLink[0].href = value;
				break;	
			case "hoverText" :
				this.options.centerImage[0].hover = value;
				break;	
			case "upURL" :
				this.options.upURL = value;
				$.getJSON(this.options.upURL, function(data){
					that._setOption('upData',data);
				});
				break;
			case "upData" :
				this.options.upData = value;
				this._setOption('upImage',this.options.upData[4]);
				break;
			case "upImage" :
				this.options.upImage[0].src = value;
				break;
			case "rightURL" :
				this.options.rightURL = value;
				$.getJSON(this.options.rightURL, function(data){
					that._setOption('rightData',data);
				});
				break;
			case "rightData" :
				this.options.rightData = value;
				this._setOption('rightImage',this.options.rightData[4]);
				break;
			case "rightImage" :
				this.options.rightImage[0].src = value;
				break;
			case "downURL" :
				this.options.downURL = value;
				$.getJSON(this.options.downURL, function(data){
					that._setOption('downData',data);
				});
				break;
			case "downData" :
				this.options.downData = value;
				this._setOption('downImage',this.options.downData[4]);
				break;
			case "downImage" :
				this.options.downImage[0].src = value;
				break;
			case "leftURL" :
				this.options.leftURL = value;
				$.getJSON(this.options.leftURL, function(data){
					that._setOption('leftData',data);
				});
				break;
			case "leftData" :
				this.options.leftData = value;
				this._setOption('leftImage',this.options.leftData[4]);				
				break;
			case "leftImage" :
				this.options.leftImage[0].src = value;
				break;
			default :
				resolved = false;
		}
		if (!resolved) $.Widget.prototype._setOption.apply( this, arguments );
	}
});
$.extend( $.ui.simpleimagenetwork, {
	version: "@VERSION"
});

})( jQuery );