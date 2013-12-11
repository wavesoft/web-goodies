(function(glob) {

	/**
	 * TimelineObjects can be placed on timeline and they are used
	 * for synchronizing arbitrary elements.
	 */
	var TimelineObject = glob.TimelineObject = function() {
		this.begin = 0;
		this.end = 0;
	}

	/**
	 * Return the timestamp (in milliseconds) of the first frame
	 */
	TimelineObject.prototype.beginTime = function() {
		return this.begin;
	}

	/**
	 * Return the timestamp (in milliseconds) of the last frame
	 */
	TimelineObject.prototype.endTime = function() {
		return this.end;
	}

	/**
	 * This function updates the visual representation of the object on the stage and on the timeline.
	 * Placeholder function that will be replaced upon insertion on timeline logic.
	 */
	TimelineObject.prototype.updateTimeline = function() {

	}

	/**
	 * Callback functions from the timeline logic
	 */
	TimelineObject.prototype.onUpdate = function( timeline, delta, frame, time ) { }
	TimelineObject.prototype.onEnter = function( timeline ) { }
	TimelineObject.prototype.onExit = function( timeline ) { }
	TimelineObject.prototype.onPlaying = function( timeline ) { }
	TimelineObject.prototype.onPaused = function( timeline ) { }

})(window);