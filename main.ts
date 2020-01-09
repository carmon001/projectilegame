function player () {
    boney = sprites.create(img`
. f e e e d e c c e d e e e f . 
. f e e a e e c c e e a e e f . 
f e e a e e e c c e e e a e e f 
f e e c e e e a a e e e c e e f 
f e e c e f e e e e f e c e e f 
. f f a e e e e e e e e a f f . 
. . f e e e e e e e e e e f . . 
. . f e e e e f f e e e e f . . 
. . f e a e e f f e e a e f . . 
. . f e c e e c c e e c e f . . 
. . f f f e e e e e e f f f . . 
. . f c c f f c c f f c c f . . 
. . f a a a f 3 3 f a a a f . . 
. . f e e e f f f f e e e f . . 
. f e e e e e e e e e e e e f . 
. f e e e e e e e e e e e e f . 
`, SpriteKind.Player)
    boney.setPosition(78, 101)
    controller.moveSprite(boney, 100, 100)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. f f . . f f f f f f . . . . . 
f b b f f b b b b b b f f . . . 
f 1 1 b b 1 1 1 1 1 b b b f f . 
f d d 1 b d d d d d 1 b b b b f 
f b b d b b b b b b d 1 b b b f 
f b b b b b b b b b b 1 1 b b f 
f b b b b b b b b b b 1 1 b 1 f 
f b b b b 1 1 b b b b b 1 1 1 f 
f b b b 1 1 1 b 1 1 b b b b b f 
f b b b d d 1 1 1 1 1 b b b b f 
f b b b b d d d 1 1 d b b b b f 
f b b b b b b d d d b b b f f . 
f b b f f b b b b b b f f . . . 
. f f . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    projectile2.setPosition(8, Math.randomRange(0, 120))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let boney: Sprite = null
player()
game.onUpdate(function () {
    projectile()
})
