controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -130
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).isHittingTile(CollisionDirection.Bottom)) {
    	
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -130
    } else if (mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).isHittingTile(CollisionDirection.Bottom)) {
    	
    } else {
    	
    }
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    rattlesnakejack = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 4 f f . . . . . . . 
        . . . . 5 5 2 f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 0)
})
let rattlesnakejack: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e d d e e . . . . . . 
    . . . . . d f d f e e . . . . . 
    . . . . . d f d f . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . . d 2 2 2 2 d . . . . . . 
    . . . . d 2 2 2 2 d . . . . . . 
    . . . . d 2 2 2 2 d . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . 8 . . 8 . . . . . . . 
    . . . . . f . . f . . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . f 1 1 1 1 1 1 1 f . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 f f f f f f f 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.Player))
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).ay = 150
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).ay = 150
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 0)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 0)
