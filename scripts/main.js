import { world, system } from "@minecraft/server";

world.beforeEvents.entityRemove.subscribe(data=>{
    const {typeId, dimension, location} = data.removedEntity;
    if(typeId === "minecraft:fireworks_rocket") system.run(()=>{
        dimension.createExplosion(location, 3, {
            allowUnderwater: true,
            breaksBlocks: true,
            causesFire: true
        });
    });
});