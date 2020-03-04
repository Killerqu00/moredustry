const silo = extendContent(Block, "scatter-silo", {

    // override the method to build configuration
    buildConfiguration(tile, table) {
        table.addImageButton(
            Icon.ok,
            Styles.clearTransi,

            // configure the tile to signal that it has been
            // pressed (this sync on client to server)
            run(() => tile.configure(0))
        ).size(50);
    },

    // override configure event
    configured(tile, value) {
        Calls.damage(tile.x, tile.y, 100.0, 1);
        //null
    }
});
