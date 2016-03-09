export default function DraggableGrid(options) {

  let {order, container, width, height, onAdded, onMoved, onRemoved, onChangedData, onNewLayout} = options;

  // GRID OPTIONS
  var rowSize = height;
  var colSize = width;
  var gutter = 0;     // Spacing between tiles
  var numTiles = 10;    // Number of tiles to initially populate the grid with
  var fixedSize = false; // When true, each tile's colspan will be fixed to 1
  var oneColumn = false; // When true, grid will only have 1 column and tiles have fixed colspan of 1
  var threshold = "50%"; // This is amount of overlap between tiles needed to detect a collision


  var $list = $(container);

  // Live node list of tiles
  var tiles = $list[0].getElementsByClassName("tile");
  var label = 1;
  var zIndex = 1000;

  var startWidth = "100%";
  var startSize = colSize;

  var colCount = null;
  var rowCount = null;
  var gutterStep = null;


  $(window).resize(resize);

  init();

  // ========================================================================
  //  INIT
  // ========================================================================
  function init() {

    var width = startWidth;

    fixedSize = true;
    oneColumn = false;
    colSize = startSize;

    // For images demo
    //window.stop();

    $(".tile").each(function() {
      Draggable.get(this).kill();
      $(this).remove();
    });

    TweenLite.to($list, 0.2, {width: width});
    TweenLite.delayedCall(0.25, populateBoard);

    function populateBoard() {

      label = 1;
      resize();

      for (let i = 0; i < order.length; i++) {
        createTile(i, order[i]);
      }
    }
  }


  // ========================================================================
  //  RESIZE
  // ========================================================================
  function resize() {

    colCount = oneColumn ? 1 : Math.floor($list.outerWidth() / (colSize + gutter));
    gutterStep = colCount == 1 ? gutter : (gutter * (colCount - 1) / colCount);
    rowCount = 0;

    layoutInvalidated();
  }


  // ========================================================================
  //  CHANGE POSITION
  // ========================================================================
  function changePosition(fromInd, toInd, rowToUpdate) {

    var $tiles = $(".tile");
    var insert = fromInd > toInd ? "insertBefore" : "insertAfter";

    // Change DOM positions
    $tiles.eq(fromInd)[insert]($tiles.eq(toInd));

    layoutInvalidated(rowToUpdate);

    onMoved(getOrder());
  }

  // ========================================================================
  //  CREATE TILE
  // ========================================================================
  function createTile(index, data) {
    index = index || 0;

    var element = $("<div></div>").addClass("tile");
    var lastX = 0;

    Draggable.create(element, {
      onDrag: onDrag,
      onPress: onPress,
      onRelease: onRelease
    });

    // NOTE: Leave rowspan set to 1 because this
    // doesn't calculate different row heights
    var tile = {
      data: data,
      index: null,
      col: null,
      colspan: 1,
      height: 0,
      inBounds: true,
      isDragging: false,
      lastIndex: null,
      newTile: true,
      positioned: false,
      row: null,
      rowspan: 1,
      width: 0,
      x: 0,
      y: 0
    };

    // Add tile properties to our element for quick lookup
    element[0].tile = tile;


    if ($(container).find('.tile').length <= 0 || index === 0) {
      $list.prepend(element);
    }
    else {
      let elementToInsertAfter = $('.tile').get(index - 1);
      element.insertAfter(elementToInsertAfter);
    }

    layoutInvalidated();


    // checks if given coordinates are inside particular element
    function isInBounds(posX, posY, elX, elY, elWidth, elHeight) {
      //console.log(arguments);
      let isInHorizontal = (posX >= elX) && (posX <= elX + elWidth);
      //console.log('is horizontal', isInHorizontal);
      let isInVertical = (posY >= elY) && (posY <= elY + elHeight);

      return isInHorizontal && isInVertical;
    }

    function onPress() {
      console.log('press');
      console.log(this);


      let posX = this.pointerEvent.pageX;
      let posY = this.pointerEvent.pageY;

      // check if we clicked a clickable element
      let isClickable = false;
      $(this.target).find('*').each(function(index, el) {
        let $el = $(el);

        let elOffset = $el.offset();


        let inBounds = isInBounds(posX, posY, elOffset.left, elOffset.top, $el.outerWidth(), $el.outerHeight());
        //console.log(inBounds);
        //console.log($el[0]);

        if (inBounds && $el.attr('data-clickable') === 'true') {
          isClickable = true;
        }
      });

      if (isClickable) {
        return;
      }

      $(this.target).find('input').blur();

      lastX = this.x;
      tile.lastIndex = tile.index;
      tile.isDragging = true;
    }

    function onDrag() {
      console.log('drag');

      TweenLite.to(element, 0.2, {
        autoAlpha: 0.75,
        scale: 0.95,
        zIndex: "+=1000"
      });

      // Move to end of list if not in bounds
      if (!this.hitTest($list, 0)) {
        tile.inBounds = false;
        changePosition(tile.index, tiles.length - 1);
        return;
      }

      tile.inBounds = true;

      for (var i = 0; i < tiles.length; i++) {

        // Row to update is used for a partial layout update
        // Shift left/right checks if the tile is being dragged
        // towards the the tile it is testing
        var testTile = tiles[i].tile;
        var onSameRow = (tile.row === testTile.row);
        var rowToUpdate = onSameRow ? tile.row : -1;
        var shiftLeft = onSameRow ? (this.x < lastX && tile.index > i) : true;
        var shiftRight = onSameRow ? (this.x > lastX && tile.index < i) : true;
        var validMove = (testTile.positioned && (shiftLeft || shiftRight));

        if (this.hitTest(tiles[i], threshold) && validMove) {
          changePosition(tile.index, i, rowToUpdate);
          break;
        }
      }

      lastX = this.x;
    }

    function onRelease() {

      console.log('release');

      console.log(this);

      // Move tile back to last position if released out of bounds
      this.hitTest($list, 0)
        ? layoutInvalidated()
        : changePosition(tile.index, tile.lastIndex);

      TweenLite.to(element, 0.2, {
        autoAlpha: 1,
        scale: 1,
        x: tile.x,
        y: tile.y,
        zIndex: ++zIndex
      });

      tile.isDragging = false;
    }


    onAdded(index, element, getOrder());
  }

  // ========================================================================
  //  REMOVE
  // ========================================================================
  function removeTile(index) {

    console.log('removing index', index);
    $('.tile').get().forEach((tile) => {
      if (tile.tile.index === index) {
        container.removeChild(tile);
      }
    });

    layoutInvalidated();
    onRemoved(getOrder());
  }

  // ========================================================================
  //  REMOVE
  // ========================================================================
  function changeTileData(index, data) {
    $('.tile').get().forEach((tile) => {
      if (tile.tile.index === index) {
        tile.tile.data = data;
      }
    });

    layoutInvalidated();
  }


  function getOrder() {
    return $('.tile').get().map((tile) => tile.tile.data);
  }

  // ========================================================================
  //  LAYOUT INVALIDATED
  // ========================================================================
  function layoutInvalidated(rowToUpdate) {

    var timeline = new TimelineMax();
    var partialLayout = (rowToUpdate > -1);

    var height = 0;
    var col = 0;
    var row = 0;
    var time = 0.35;

    $(container).find('.tile').each(function(index, element) {
      //console.log('index:', index);
      //console.log('element', element);

      var tile = this.tile;
      var oldRow = tile.row;
      var oldCol = tile.col;
      var newTile = tile.newTile;

      // PARTIAL LAYOUT: This condition can only occur while a tile is being
      // dragged. The purpose of this is to only swap positions within a row,
      // which will prevent a tile from jumping to another row if a space
      // is available. Without this, a large tile in column 0 may appear
      // to be stuck if hit by a smaller tile, and if there is space in the
      // row above for the smaller tile. When the user stops dragging the
      // tile, a full layout update will happen, allowing tiles to move to
      // available spaces in rows above them.
      if (partialLayout) {
        row = tile.row;
        if (tile.row !== rowToUpdate) return;
      }

      // Update trackers when colCount is exceeded
      if (col + tile.colspan > colCount) {
        col = 0;
        row++;
      }

      $.extend(tile, {
        col: col,
        row: row,
        index: index,
        x: col * gutterStep + (col * colSize),
        y: row * gutterStep + (row * rowSize),
        width: tile.colspan * colSize + ((tile.colspan - 1) * gutterStep),
        height: tile.rowspan * rowSize
      });

      col += tile.colspan;

      // If the tile being dragged is in bounds, set a new
      // last index in case it goes out of bounds
      if (tile.isDragging && tile.inBounds) {
        tile.lastIndex = index;
      }

      if (newTile) {

        // Clear the new tile flag
        tile.newTile = false;

        var from = {
          autoAlpha: 0,
          height: tile.height,
          scale: 0,
          width: tile.width
        };

        var to = {
          autoAlpha: 1,
          scale: 1,
          zIndex: zIndex
        };

        timeline.fromTo(element, time, from, to, "reflow");
      }

      // Don't animate the tile that is being dragged and
      // only animate the tiles that have changes
      if (!tile.isDragging && (oldRow !== tile.row || oldCol !== tile.col)) {

        var duration = newTile ? 0 : time;

        // Boost the z-index for tiles that will travel over
        // another tile due to a row change
        if (oldRow !== tile.row) {
          timeline.set(element, {zIndex: ++zIndex}, "reflow");
        }

        timeline.to(element, duration, {
          x: tile.x,
          y: tile.y,
          onComplete: function() {
            tile.positioned = true;
          },
          onStart: function() {
            tile.positioned = false;
          }
        }, "reflow");
      }
    });

    if (!row) rowCount = 1;

    // If the row count has changed, change the height of the container
    if (row !== rowCount) {
      rowCount = row;
      height = rowCount * gutterStep + (++row * rowSize);
      timeline.to($list, 0.2, {height: height}, "reflow");
    }


    onNewLayout(getOrder());
  }


  return {
    changeData(index, data) {
      changeTileData(index, data);
      onChangedData(getOrder());
    },

    add(index, data) {
      createTile(index, data);
    },

    remove(index) {
      removeTile(index);
      onRemoved(getOrder());
    }
  };
}